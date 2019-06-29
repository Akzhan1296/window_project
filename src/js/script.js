
import {tabProject} from  './parts/tab';
import {popups} from  './parts/popups';
import {forms} from  './parts/forms';
import {calc} from  './parts/calc';
import {bigImg} from  './parts/bigImg';

require('es6-promise').polyfill();
require('formdata-polyfill');

window.addEventListener('DOMContentLoaded', () => {
    'use strict';

    tabProject();
    popups();
    forms();
    calc();
    bigImg();

});
if ('NodeList' in window && !NodeList.prototype.forEach) {
    console.info('polyfill for IE11');
    NodeList.prototype.forEach = function (callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}

