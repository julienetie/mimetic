import requestFrame from 'request-frame';
/**
 * resizilla
 * Version:  0.6.0
 * License:  MIT
 * Copyright Julien Etienne 2015 - 2016 All Rights Reserved.
 * github:  https://github.com/julienetie/resizilla
 *‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾‾
 */
/*           _.-~-.
           7''  Q..\
        _7         (_
      _7  _/    _q.  /
    _7 . ___  /VVvv-'_                                            .
   7/ / /~- \_\\      '-._     .-'                      /       //
  ./ ( /-~-/  ||'=.__  '::. '-~'' {             ___   /  //     ./{
 V   V-~-~|   ||   __''_   ':::.   ''~-~.___.-'' _/  // / {_   /  {  /
  VV/-~-~-|  / \ .'__'. '.  '::  ____               _ _ _        ''.
  / /~~~~||  VVV/ /  \ )  \     |  _ \ ___  ___(_)___(_) | | __ _   .::'
 / (~-~-~\\.-' /    \'   \::::. | |_) / _ \/ __| |_  / | | |/ _` | :::'
/..\    /..\__/      '     '::: |  _ <  __/\__ \ |/ /| | | | (_| | ::'
vVVv    vVVv                 ': |_| \_\___||___/_/___|_|_|_|\__,_| ''

Copyright (c) 2015 Julien Etienne. MIT License */



/*! A fix for the iOS orientationchange zoom bug.
 Script by @scottjehl, rebound by @wilto.
 MIT / GPLv2 License.
*/

var request = requestFrame('request');
var cancel = requestFrame('cancel');
var self = window;
var store = {};


function requestTimeout(fn, delay) {
    var start = Date.now();

    function increment(d) {
        store.k = !store.k ? d : null;
        return store.k += 1;
    }

    function loop() {
        store.delta = Date.now() - start;
        store.callHandler = store.delta >= delay ? fn.call() : request(loop);
    }

    request(loop);
    return increment(0);
}


function handlerCallback(handler, delay, incept) {
    handler.apply(self, handler, delay, incept);
}


export default function resizilla(optionsHandler, delay, incept) {
    var options = {};
    resizilla.options = options;
  
        // Defaults
        options.orientationChange = true;
        options.useCapture = true;
        options.incept = false;

    if(optionsHandler.constructor === {}.constructor){
        options.handler = optionsHandler.handler;
        options.delay = optionsHandler.delay;
        options.incept = optionsHandler.incept;
        options.orientationChange = optionsHandler.orientationChange;
        options.useCapture = optionsHandler.useCapture;
    }else{
        options.handler = optionsHandler;
        options.delay = delay;
        options.incept = typeof options.incept === 'undefined' ? options.incept : incept;
    }


    function debounce(handler, delay, incept) {
        var timeout;
                // console.log(delay)
        return function() {
            var lastCall = function() {
                timeout = 0;
                if (!incept) {
                    handlerCallback(handler, delay, incept);
                }
            };

            store.instant = incept && !timeout;
            cancel(timeout);
            timeout = requestTimeout(lastCall, delay);

            if (store.instant) {
                handlerCallback(handler, delay, incept);
            }
        };
    }


    function addWindowEvent(handler) {
        self.addEventListener('resize', handler, options.useCapture);
    }


    addWindowEvent(debounce(options.handler, options.delay, options.incept));


    if(options.orientationChange){
        self.addEventListener('orientationchange', options.handler, options.useCapture);
    }
}


resizilla.destroy = function(type) {
    if(!type || type === 'all'){
        window.removeEventListener('resize', this.options.handler, this.options.useCapture);
        window.removeEventListener('orientationchange', this.options.handler, this.options.useCapture);
    }else{
        window.removeEventListener(type, this.options.handler, this.options.useCapture);
    }
};
