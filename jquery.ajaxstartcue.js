/*!
 * jQuery AjaxStartCue Plugin v0.0.1
 * https://github.com/invetek/jquery-ajaxstartcue
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

(function($) {
    $.fn.ajaxStartCue = function(settings){
        
        var options = $.extend({}, $.fn.ajaxStartCue.defaults ,settings);
        
        return $(this);       
        
    };
    
    $.fn.ajaxStartCue.defaults = {
        
    };
    
}(jQuery));

