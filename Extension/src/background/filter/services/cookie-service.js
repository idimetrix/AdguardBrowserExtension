/**
 * This file is part of Adguard Browser Extension (https://github.com/AdguardTeam/AdguardBrowserExtension).
 *
 * Adguard Browser Extension is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Lesser General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * Adguard Browser Extension is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public License
 * along with Adguard Browser Extension.  If not, see <http://www.gnu.org/licenses/>.
 */

import * as TSUrlFilter from '@adguard/tsurlfilter';
import { stealthService } from './stealth-service';
import { filteringLog } from '../filtering-log';
import { filteringApi } from '../filtering-api';
import { RequestTypes } from '../../utils/request-types';

/**
 * Returns cookie rules matching request details
 *
 * @param url
 * @param referrer
 * @return {NetworkRule[]}
 */
export const getCookieRules = (url, referrer) => {
    const cookieRules = filteringApi.getCookieRules(url, referrer, RequestTypes.DOCUMENT);
    if (cookieRules.length > 0) {
        return cookieRules;
    }

    // If cookie rules not found - apply stealth rules
    return stealthService.getCookieRules(url, referrer, RequestTypes.DOCUMENT);
};

/**
 * Returns cookie rules data for content script
 *
 * Steps:
 * - content script requests matching cookie rules for the frame(in which this script is executed)
 * - service returns matching set of rules data to content script
 * - the rules are applied with TSUrlFilterContentScript.CookieController
 * - filtering log receives callback with applied rules data
 *
 * The important point is:
 * - there is no way to run cookie controller script via chrome.tabs.executeScript cause one only could be executed
 * for all frames or main frame only. But it's not correct cause there should be different rules
 * for each frame.
 *
 * @param url
 * @param referrer
 * @returns {Array} serialized rules data
 */
export const getCookieRulesDataForContentScript = (url, referrer) => {
    const blockingRules = getCookieRules(url, referrer).filter((rule) => {
        const cookieModifier = rule.getAdvancedModifier();
        return !cookieModifier.getSameSite() && !cookieModifier.getMaxAge();
    });

    return blockingRules.map((rule) => {
        return {
            ruleText: rule.getText(),
            match: rule.getAdvancedModifierValue(),
            isThirdParty: rule.isOptionEnabled(TSUrlFilter.NetworkRuleOption.ThirdParty),
        };
    });
};

/**
 * Cookie filtering service
 */
const cookieService = new TSUrlFilter.CookieFiltering(filteringLog);

export default cookieService;
