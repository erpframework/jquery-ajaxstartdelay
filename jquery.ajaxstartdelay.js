/*!
 * jQuery AjaxStartDelay Plugin v0.1
 * https://github.com/invetek/jquery-ajaxstartdelay
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

(function($) {
    $.fn.ajaxStartDelay = function(delay, fn){
        
        var timer;
        
        fn = (arguments.length < 2) ? delay : fn;
        delay = isNaN(delay) ? 0 : (delay || 0);    

        return $(this).on('ajaxStart', function(){
            timer = window.setTimeout(function(){
               fn();
            }, delay);
            
        }).on('ajaxStop', function(){
            window.clearTimeout(timer);
        });
        
    };   
    
}(jQuery));