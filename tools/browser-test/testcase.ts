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

import { Product } from './product';

/**
 * Key is a product name,
 * value is an array of testcase exceptions for the product.
 */
export type TestcaseException = {
    [key in Product]: number[];
};

export interface Testcase {
    id: number,
    title: string,
    link: string,
    rulesUrl?: string,
    readmeUrl?: string,
    compatibility: Product[],
    exceptions?: TestcaseException[],
}

export const filterCompatibleTestcases = (testcases: Testcase[], productType: Product) => {
    return testcases.filter((testcase) => {
        return testcase.compatibility.includes(productType);
    });
};
