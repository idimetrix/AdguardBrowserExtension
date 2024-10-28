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

import axios from 'axios';

import { TESTCASES_BASE_URL, TESTCASES_DATA_PATH } from './test-constants';
import { Testcase } from './testcase';

axios.defaults.baseURL = TESTCASES_BASE_URL;

export const get = async <ResponseData>(url: string) => {
    const res = await axios.get<ResponseData>(url, {
        validateStatus: (status) => {
            return status === 200; // Resolve only if the status code is 200
        },
    });

    return res.data;
};

export const getRuleText = (path: string) => get<string>(path);

export const getTestcases = () => get<Testcase[]>(TESTCASES_DATA_PATH);
