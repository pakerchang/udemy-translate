// ==UserScript==
// @name         修復Udemy Subtitle Google翻譯問題
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Fix Udemy Subtitle Translate Bug, Open the Google translate and Viedo transcript to use.
// @author       You
// @match        *://www.udemy.com/course/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    if (typeof window.i !== 'undefined') { clearInterval(window.i) } else {
        let lastText = ''
        function check() {
            let toEl = $('.well--container--2edq4 span');
            let fromEl = $('p[data-purpose="transcript-cue-active"] span')
            let currentText = fromEl.html()
            if (lastText !== currentText) {
                toEl.html(currentText);
            }
            lastText = fromEl.html()
        }
        window.i = setInterval(check, 200);
    }
})();