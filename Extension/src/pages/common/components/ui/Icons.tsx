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

import React from 'react';

import '../../styles/icons.pcss';

export const Icons = () => {
    return (
        <svg xmlns="http://www.w3.org/2000/svg" display="none">
            <symbol id="arrow-left" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <g fill="none" fillRule="evenodd">
                    <path stroke="currentColor" d="m15 18-6-6 6-6" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </symbol>

            <symbol id="cross" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path stroke="currentColor" d="M6.42857 6.42857L17.6043 17.6043" strokeWidth="1.5" strokeLinecap="round" />
                <path stroke="currentColor" d="M6.42871 17.5714L17.6045 6.39563" strokeWidth="1.5" strokeLinecap="round" />
            </symbol>

            <symbol id="checked" viewBox="0 0 12 9">
                <path d="m4.05 8.12903226 4.47096774 4.47096774 5.42903226-7.02580645" fill="none" stroke="#fff" strokeLinecap="round" strokeWidth="1.08" transform="translate(-3 -5)" />
            </symbol>

            <symbol id="logo" viewBox="0 0 107 24">
                <g fill="none" fillRule="evenodd">
                    {/* the shield with the brand color */}
                    <path fill="#67b279" d="M12.4997 0C8.74899 0 4.22465.860534.500004 2.75463.500004 6.84537.448591 17.0366 12.4997 24 24.5511 17.0366 24.5 6.84537 24.5 2.75463 20.7751.860534 16.2507 0 12.4997 0Z" />
                    {/* left (shadowed) part of the shield */}
                    <path fill="#5b9f6b" d="M12.5 0h-.0003C8.74898 0 4.22464.860534.500002 2.75463v.05192C.499784 6.931.499251 17.0659 12.4997 24c.0001-.0001.0002-.0001.0003-.0002V0Z" />
                    {/* the check sign on the shield */}
                    <path fill="#fff" d="m12.3942 15.4286 6.963-9.22598c-.5103-.40206-.9578-.1183-1.2042.10139l-.009.0007-5.8057 5.93749-2.1875-2.58795C9.10728 8.46897 7.68859 9.37307 7.35718 9.612l5.03702 5.8166Z" />
                    {/* the text "ADGUARD" */}
                    <path fill="currentColor" d="M57.1774 17.4737c-1.6568 0-3.006-.5141-4.0479-1.5423-1.0418-1.0282-1.5627-2.3387-1.5627-3.9314 0-1.5222.5336-2.81497 1.6008-3.87846 1.0673-1.0635 2.3988-1.59523 3.9946-1.59523.9249 0 1.7075.11844 2.3479.35533.6403.23689 1.2553.60231 1.8448 1.09625L59.876 9.74701c-.4472-.37298-.8792-.64515-1.2959-.81652-.4168-.17137-.9148-.25705-1.4942-.25705-.8538 0-1.578.32509-2.1726.97529-.5946.65017-.8919 1.43397-.8919 2.35127 0 .9677.3024 1.7691.9072 2.4042.6048.635 1.3798.9526 2.325.9526.8742 0 1.6111-.2117 2.2107-.6351v-1.5121h-2.3631v-2.011h4.6348v4.5967c-1.3315 1.1189-2.851 1.6784-4.5586 1.6784ZM32.5739 6.63214 28 17.2922h2.3937l.9757-2.3739h4.5129l.9758 2.3739h2.4546L34.7389 6.63214h-2.165Zm1.052 2.7973 1.4179 3.43236h-2.8359l1.418-3.43236Zm6.9122 7.86276V6.70776h4.1623c1.6669 0 3.0289.5015 4.086 1.50451C49.8435 9.21528 50.372 10.4778 50.372 12c0 1.5121-.5311 2.7721-1.5932 3.7802-1.0622 1.008-2.4216 1.512-4.0784 1.512h-4.1623Zm4.1621-2.1017h-1.8143V8.80954h1.8143c.9555 0 1.7305.29737 2.3251.89212.5946.59474.8919 1.36084.8919 2.29834 0 .9476-.2948 1.7162-.8843 2.3059-.5895.5897-1.3671.8846-2.3327.8846Zm20.3443 1.066c.8131.8014 1.9464 1.2021 3.3999 1.2021 1.4636 0 2.6096-.4033 3.438-1.2097.8284-.8064 1.2426-1.9959 1.2426-3.5685V6.70776h-2.3479v6.06344c0 .8266-.2008 1.4566-.6023 1.89-.4014.4335-.9681.6502-1.6999.6502s-1.2985-.2243-1.7-.6728c-.4015-.4486-.6022-1.0963-.6022-1.943V6.70776h-2.3479V12.756c0 1.5323.4065 2.6991 1.2197 3.5005Zm8.7169 1.0357 4.5738-10.66006h2.165l4.5739 10.66006h-2.4547l-.9757-2.3739h-4.5129l-.9758 2.3739h-2.3936Zm5.6258-7.86276 1.4179 3.43236h-2.8358l1.4179-3.43236Zm6.9123-2.72168h4.8788c1.3519 0 2.3886.35786 3.1103 1.07357.6098.60483.9147 1.42134.9147 2.44957 0 1.6229-.7623 2.7167-2.2869 3.2812l2.6071 3.7801h-2.7443l-2.3175-3.387h-1.8143v3.387h-2.3479V6.70776Zm4.7262 5.14104h-2.3784V8.80954H90.98c.5793 0 1.0316.12852 1.3569.38558.3252.25705.4879.63254.4879 1.12648 0 .4637-.1576.8342-.4727 1.1114-.3151.2772-.7572.4158-1.3264.4158Zm5.8754-5.14104h4.1619c1.667 0 3.029.5015 4.086 1.50451 1.057 1.00301 1.586 2.26553 1.586 3.78773 0 1.5121-.531 2.7721-1.593 3.7802-1.062 1.008-2.422 1.512-4.079 1.512h-4.1619V6.70776Zm4.1619 8.48274h-1.8139V8.80954h1.8139c.956 0 1.731.29737 2.325.89212.595.59474.892 1.36084.892 2.29834 0 .9476-.294 1.7162-.884 2.3059-.589.5897-1.367.8846-2.333.8846Z" />
                </g>
            </symbol>

            <symbol id="magnifying" viewBox="0 0 24 24">
                <circle cx="9.5" cy="9.5" r="5.5" fill="none" stroke="currentColor" strokeWidth="1.5" />
                <path d="M14 14L19 19" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            </symbol>

            <symbol id="tick" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                    <path stroke="#67B279" d="m5 12 6 6 8-9" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </symbol>

            <symbol id="trash" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd" stroke="currentColor">
                    <path clipRule="evenodd" d="M7 9h10l-.7633 10.0755c-.0395.5215-.4742.9245-.9971.9245H8.76044c-.52298 0-.95763-.403-.99714-.9245L7 9Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path d="M6 6.5h12M14 6V4h-4v2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    <path clipRule="evenodd" d="M13.5 12v5-5ZM10.5 12v5-5Z" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </symbol>

            <symbol id="reload" viewBox="0 0 24 24">
                <g fill="none" fillRule="evenodd">
                    <path stroke="currentColor" d="M6 6.99999C9.6 1.79999 19.5 3.49996 20 12v1.5M18 16.9999c-3.6 5.2-13.5 3.5001-14-5V11" strokeWidth="1.5" strokeLinecap="round" />
                    <path stroke="currentColor" d="m22 12-2 2-2-2M2 12l2-2 2 2" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </g>
            </symbol>

            <symbol id="select" viewBox="0 0 14 8">
                <path d="m6 10 6 6 6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5" transform="translate(-5 -9)" />
            </symbol>

            {/* FIXME: move to page/filtering-log components/ui/Icons as it is not common, and used only there */}
            <symbol id="arrow-bottom" viewBox="0 0 24 24">
                <path d="M8.0354 10.9305L11.965 14.9997L16.0342 11.0702" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            <symbol id="extend" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path d="M6 10V6H10M6 14V18H10M18 10V6H14M18 14V18H14" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            <symbol id="line-break-on" viewBox="0 0 24 24">
                <path fillRule="evenodd" clipRule="evenodd" d="M4.08398 4.73584C3.66977 4.73584 3.33398 5.07163 3.33398 5.48584C3.33398 5.90005 3.66977 6.23584 4.08398 6.23584H19.6176C20.0318 6.23584 20.3676 5.90005 20.3676 5.48584C20.3676 5.07163 20.0318 4.73584 19.6176 4.73584H4.08398ZM4 8.95654C3.58579 8.95654 3.25 9.29233 3.25 9.70654C3.25 10.1208 3.58579 10.4565 4 10.4565H12C12.026 10.4565 12.0517 10.4552 12.077 10.4526H15.5396C17.3324 10.4526 18.7857 11.906 18.7857 13.6987C18.7857 15.4833 17.3456 16.9316 15.5641 16.9447L16.2941 16.2144C16.5869 15.9215 16.5868 15.4466 16.2939 15.1538C16.0009 14.861 15.5261 14.8611 15.2332 15.154L13.2915 17.0966C12.9988 17.3894 12.9988 17.8641 13.2915 18.157L15.2332 20.0996C15.5261 20.3925 16.0009 20.3926 16.2939 20.0998C16.5868 19.807 16.5869 19.3321 16.2941 19.0391L15.6975 18.4422C18.2456 18.359 20.2857 16.2671 20.2857 13.6987C20.2857 11.0775 18.1608 8.95264 15.5396 8.95264H10V8.95654H4ZM3.33398 13.7417C3.33398 13.3275 3.66977 12.9917 4.08398 12.9917H10.8799C11.2941 12.9917 11.6299 13.3275 11.6299 13.7417C11.6299 14.1559 11.2941 14.4917 10.8799 14.4917H4.08398C3.66977 14.4917 3.33398 14.1559 3.33398 13.7417ZM3.33398 17.6265C3.33398 17.2123 3.66977 16.8765 4.08398 16.8765H10.8799C11.2941 16.8765 11.6299 17.2123 11.6299 17.6265C11.6299 18.0407 11.2941 18.3765 10.8799 18.3765H4.08398C3.66977 18.3765 3.33398 18.0407 3.33398 17.6265Z" fill="currentColor" />
            </symbol>

            <symbol id="line-break-off" viewBox="0 0 24 24">
                <path d="M4 6H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 18H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 14H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M4 10H20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            <symbol id="info" viewBox="0 0 24 24">
                <circle cx="12" cy="12" r="9" stroke="currentColor" fill="none" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12 16V10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.997 7.59552C12.009 7.59745 11.997 7.40446 11.997 7.40446" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            <symbol id="reduce" viewBox="0 0 24 24">
                <rect width="24" height="24" fill="none" />
                <path d="M10 6V10H6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10 18V14H6" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 6V10H18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M14 18V14H18" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            {/* FIXME: move to page/filtering-log components/ui/Icons as it is not common, and used only there */}
            <symbol id="ban" viewBox="0 0 16 16">
                <path fillRule="evenodd" clipRule="evenodd" d="M8 14C11.3137 14 14 11.3137 14 8C14 6.34315 13.3284 4.84315 12.2426 3.75736C11.69 3.20469 11.03 2.75934 10.2966 2.45524C9.58921 2.1619 8.81351 2 8 2C4.68629 2 2 4.68629 2 8C2 8.81351 2.1619 9.58921 2.45524 10.2966C2.75934 11.03 3.20469 11.69 3.75736 12.2426C4.84315 13.3284 6.34315 14 8 14Z" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M2.21513 13.8442L13.5485 2.51087" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            {/* FIXME: move to page/filtering-log components/ui/Icons as it is not common, and used only there */}
            <symbol id="arrow-status" viewBox="0 0 16 16">
                <path d="M11.7038 4.66663L14.6667 7.99996L1.33341 7.99996" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M11.7038 11.3334L14.6667 8.00004" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            {/* FIXME: move to page/filtering-log components/ui/Icons as it is not common, and used only there */}
            <symbol id="transfer-status" viewBox="0 0 16 16">
                <path d="M10.3333 2.66663L12.3333 4.66663" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M10.3333 6.66663L12.3333 4.66663" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M12.3334 4.66671H3.66675" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.66675 9.33337L3.66675 11.3334" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M5.66675 13.3334L3.66675 11.3334" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M3.66659 11.3333H12.3333" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            {/* FIXME: move to page/filtering-log components/ui/Icons as it is not common, and used only there */}
            <symbol id="arrow-scrollbar" viewBox="0 0 32 32">
                <rect width="32" height="32" fill="none" />
                <path d="M13.8958 21.9468L19.9996 16.0524L14.1052 9.9486" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>

            {/* FIXME: move to page/filtering-log components/ui/Icons as it is not common, and used only there */}
            <symbol id="radio" viewBox="0 0 24 24">
                <path d="M9.5 12C9.5 10.6196 10.6188 9.50046 11.9991 9.5C13.3795 9.5021 14.4979 10.6206 14.5 12.0009C14.4995 13.3812 13.3804 14.5 12 14.5C10.6193 14.5 9.5 13.3807 9.5 12Z" fill="currentColor" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="12.0001" cy="12" r="8.33333" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </symbol>
        </svg>
    );
};
