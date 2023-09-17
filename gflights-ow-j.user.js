// ==UserScript==
// @name         Google Flights OW J
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Sets Google Flights params to One-Way & Business class.
// @author       PimpChicken
// @match        https://www.google.com/travel/flights*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

document.querySelectorAll('.TQYpgc.gInvKb ul')[0].children[2].click();
document.querySelectorAll('.JQrP8b.PLrkBc ul')[0].children[3].click();

})();