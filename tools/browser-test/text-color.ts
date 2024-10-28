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

import chalk from 'chalk';

export const enum TestStatus {
    Passed = 'passed',
    Failed = 'failed',
    Skipped = 'skipped',
    Timeout = 'timeout',
}

export const colorizeStatusText = (status: TestStatus) => {
    if (status === TestStatus.Passed) {
        return chalk.green(status);
    }
    if (status === TestStatus.Skipped) {
        // some tests may be skipped due to exceptions
        return chalk.yellow(status);
    }
    return chalk.red(status);
};

export const colorizeTitleText = (title: string) => chalk.bold.inverse(title);

export const colorizeDurationTime = (duration: number | string) => chalk.yellow(duration);
