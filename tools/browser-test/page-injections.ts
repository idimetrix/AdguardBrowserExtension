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
 *
 * You should have received a copy of the GNU General Public License
 * along with AdGuard Browser Extension. If not, see <http://www.gnu.org/licenses/>.
 */
/* eslint-disable no-restricted-globals */

import { type Configuration, type ConfigurationResult } from '@adguard/tswebextension/mv3';
import { FilterListPreprocessor } from '@adguard/tsurlfilter';

import { type TestDetails } from './logger';

// For tests
declare global {
    interface Window {
        adguardapi: {
            configure: (config: Configuration) => Promise<ConfigurationResult>;
        }
    }
}

export const addQunitListeners = () => {
    let qUnit: any;

    Object.defineProperty(window, 'QUnit', {
        get: () => qUnit,
        set: (value) => {
            qUnit = value;

            // https://api.qunitjs.com/callbacks/QUnit.on/#the-runend-event
            qUnit.on('runEnd', (details: TestDetails) => {
                const name = document.getElementById('qunit-header')?.textContent;

                const testDetails = Object.assign(details, { name });

                (<any>window).testDetails = testDetails;
            });
        },
        configurable: true,
    });
};

export type SetTsWebExtensionConfigArg = [ defaultConfig: Configuration, userrules: string ];

export const setTsWebExtensionConfig = async (arg: SetTsWebExtensionConfigArg) => {
    if (!self.adguardapi.configure) {
        throw new Error(`self.adguard.configure is not found in Window object: ${JSON.stringify(self)}`);
    }
    const [defaultConfig, userrules] = arg;
    const configuration: Configuration = defaultConfig;
    configuration.userrules = {
        ...FilterListPreprocessor.preprocess(userrules),
        trusted: true,
    };
    await self.adguardapi.configure(configuration);
};

export const waitUntilExtensionInitialized = async (eventName: string): Promise<void> => {
    return new Promise((resolve: () => void) => {
        addEventListener(eventName, resolve, { once: true });
    });
};
