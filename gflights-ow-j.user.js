// ==UserScript==
// @name         Google Flights OW J
// @namespace    http://tampermonkey.net/
// @version      0.2
// @description  Sets Google Flights params to One-Way & Business class.
// @author       PimpChicken
// @match        https://www.google.com/travel/flights*
// @match        https://www.google.ca/travel/flights*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

if ('URLSearchParams' in window) {
    var searchParams = new URLSearchParams(window.location.search);
    if(searchParams.get('curr') != 'USD' || searchParams.get('gl') != 'US') {
        searchParams.set('curr', 'USD'); // Replace USD with preferred currency
        searchParams.set('gl', 'US'); // Repalce US with preferred country
        window.location.search = searchParams.toString();
    }
}

document.querySelectorAll('.TQYpgc.gInvKb ul')[0].children[2].click();
document.querySelectorAll('.JQrP8b.PLrkBc ul')[0].children[3].click();


})();
