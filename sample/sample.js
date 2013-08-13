/*!
 * jQuery AjaxStartDelay Plugin Sample
 * https://github.com/invetek/jquery-ajaxstartdelay
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

$(document).ready(function(){
    // Time in ms before notification handler is called. 
    var delay = 1500; 

    // Function showNotification is called when AJAX request-response cycletime takes
    // more then 1500 ms.
    $(document).ajaxStartDelay(delay, showNotification);
    
    /* 
     * Uncomment the following codeline and comment out the previous one to see 
     * the difference between jQuery's ajaxStart and the version of this plugin 
     * provides. You'll see the notification bar showing up for a split second if 
     * you click the fast response button. That's bad user experience since 
     * there's no reason to notify the user yet if the request-reponse cycle 
     * only takes 30 ms or something like that. 
     */    
    //$(document).ajaxStartDelay(showNotification);
    
    // Function hideNotification is called when AJAX request-respone cycle is finished.
    // Keep in mind that the following line is not part of the plugin, it's just jQuery's ajaxStop.
    $(document).ajaxStop(hideNotification);
    
    // Attach handlers to the buttons
    $('#btnResponseFast').on('click', function(){
        $('#responseFast').slideUp();
        doFastAjaxRequest();
    });
    $('#btnResponseSlow').on('click', function(){
        $('#responseSlow').slideUp();
        doSlowAjaxRequest();
    });
       
});

function showNotification() { 
    $('.ajaxstatus').slideDown();
}

function hideNotification() { 
    $('.ajaxstatus').slideUp();
}

//Do AJAX request and let it respond within a second
function doFastAjaxRequest() {
    $.ajax({
        url: 'index.php',
        data: {
            'sleep': 0
        },
        success: function(){
            $('#responseFast').slideDown();
        }
    });
}

//Do AJAX request and let it respond in five seconds
function doSlowAjaxRequest() {
    $.ajax({
        url: 'index.php',
        data: {
            'sleep': 5
        },
        success: function(){
            $('#responseSlow').slideDown();
        }
    });
}