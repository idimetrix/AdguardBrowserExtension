/**
 * @file
 * This file is part of AdGuard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * AdGuard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * AdGuard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
 * See the GNU General Public License for more details.
 */

import { splitByDelimiterWithEscapeCharacter } from '@adguard/tsurlfilter';

/**
 * Validates if a regular expression is supported by Chrome's declarativeNetRequest API,
 * which uses the RE2 regex engine.
 *
 * @param {string} regexFilter - The regular expression string to validate.
 * @returns {Promise<RegexValidationResult>} A promise that resolves to an object containing:
 *   - isSupported: boolean indicating if the regex is supported
 *   - reason: string explaining why the regex is not supported (only present when isSupported is false).
 * @throws {Error} When chrome.declarativeNetRequest API is not available.
 *
 * @example
 * try {
 *   const result = await regexValidatorExtension("^example.*$");
 *   if (!result.isSupported) {
 *     console.log(`Regex not supported: ${result.reason}`);
 *   }
 * } catch (error) {
 *   console.error("API not available:", error);
 * }
 */
const regexValidatorExtension = (regexFilter: string): Promise<void> => {
    return new Promise((resolve, reject) => {
        if (typeof chrome === 'undefined' || !chrome.declarativeNetRequest) {
            reject(new Error('chrome.declarativeNetRequest is not available'));
        }

        const regexOptions: chrome.declarativeNetRequest.RegexOptions = { regex: regexFilter };
        chrome.declarativeNetRequest.isRegexSupported(regexOptions, (result) => {
            if (result.isSupported) {
                resolve();
            } else {
                reject(new Error(`Regex is not supported: ${regexFilter}, reason: ${result.reason}`));
            }
        });
    });
};
/**
 * Splits regex rule into parts: pattern, regex modifiers and rule parameters
 * Example: "/banner\d+/im$script,third-party" ->
 *   { pattern: "banner\d+", modifiers: "im", options: "script,third-party" }.
 *
 * @param rule - Filtering rule in regex format.
 * @returns Object containing pattern, modifiers and options.
 */
function splitRegexRule(rule: string): {
    pattern: string;
    modifiers: string;
    options: string | null;
} {
    const parts = splitByDelimiterWithEscapeCharacter(rule, '/', '\\', true);
    const [modifiers, ...rest] = (parts[1] || '').split('$');
    return {
        pattern: parts[0] || '',
        modifiers: modifiers || '',
        options: rest.length > 0 ? rest.join('$') : null,
    };
}

/**
 * Checks if string is a valid regex pattern, including exception rules
 * Examples:
 * - "/pattern/" -> true
 * - "@@/pattern/" -> true
 * - "/pattern/ig$third-party" -> true
 * - "not-a-regex" -> false.
 *
 * @param str - String to check.
 * @returns True if string is a valid regex pattern.
 */
function isValidRegexPattern(str: string): boolean {
    // Remove @@ prefix if exists
    const pattern = str.startsWith('@@') ? str.slice(2) : str;

    // Check if remaining string starts and ends with '/'
    if (!pattern.startsWith('/')) {
        return false;
    }

    try {
        // Split the pattern into parts
        const parts = splitByDelimiterWithEscapeCharacter(pattern, '/', '\\', true);

        // Should have at least 2 parts: ['/', 'pattern', '/']
        if (parts.length < 2) {
            return false;
        }

        // Get regex pattern and flags
        const regexPattern = parts[0];
        const [flags] = (parts[1] || '').split('$');
        // Try to create RegExp object
        try {
            const regex = new RegExp(regexPattern || '', flags);
            return !!regex;
        } catch (e) {
            return false;
        }
    } catch (e) {
        return false;
    }
}

export { splitRegexRule, isValidRegexPattern, regexValidatorExtension };
