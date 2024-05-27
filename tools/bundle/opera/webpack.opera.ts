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

import path from 'path';

import CopyWebpackPlugin from 'copy-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { merge } from 'webpack-merge';

import { genMv2CommonConfig } from '../webpack.common-mv2';
import {
    CHROMIUM_DEVTOOLS_ENTRIES,
    CHROMIUM_DEVTOOLS_PAGES_PLUGINS,
    genChromiumZipPlugin,
} from '../webpack.common';
import { updateManifestBuffer } from '../../helpers';
import {
    BACKGROUND_OUTPUT,
    TSURLFILTER_VENDOR_OUTPUT,
    TSWEBEXTENSION_VENDOR_OUTPUT,
} from '../../../constants';
import { BACKGROUND_PATH, htmlTemplatePluginCommonOptions } from '../common-constants';
import { BrowserConfig, BUILD_ENV } from '../../constants';

import { operaManifest } from './manifest.opera';

export const genOperaConfig = (browserConfig: BrowserConfig) => {
    const commonConfig = genMv2CommonConfig(browserConfig);

    if (!commonConfig?.output?.path) {
        throw new Error('commonConfig.output.path is undefined');
    }

    const operaConfig = {
        entry: {
            ...CHROMIUM_DEVTOOLS_ENTRIES,
        },
        output: {
            path: path.join(commonConfig.output.path, browserConfig.buildDir),
        },
        plugins: [
            new CopyWebpackPlugin({
                patterns: [
                    {
                        from: path.resolve(__dirname, '../manifest.common.json'),
                        to: 'manifest.json',
                        transform: (content) => updateManifestBuffer(
                            BUILD_ENV,
                            browserConfig.browser,
                            content,
                            operaManifest,
                        ),
                    },
                    {
                        context: 'Extension',
                        from: 'filters/opera',
                        to: 'filters',
                    },
                ],
            }),
            new HtmlWebpackPlugin({
                ...htmlTemplatePluginCommonOptions,
                template: path.join(BACKGROUND_PATH, 'index.html'),
                templateParameters: {
                    browser: process.env.BROWSER,
                },
                filename: `${BACKGROUND_OUTPUT}.html`,
                chunks: [
                    TSURLFILTER_VENDOR_OUTPUT,
                    TSWEBEXTENSION_VENDOR_OUTPUT,
                    BACKGROUND_OUTPUT,
                ],
            }),
            ...CHROMIUM_DEVTOOLS_PAGES_PLUGINS,
            genChromiumZipPlugin(browserConfig.browser),
        ],
    };

    return merge(commonConfig, operaConfig);
};
