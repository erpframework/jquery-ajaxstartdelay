<?php
/*!
 * jQuery AjaxStartDelay Plugin Sample
 * https://github.com/invetek/jquery-ajaxstartdelay
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

//Check for AJAX request
if (isset($_GET['sleep'])) {
    sleep(isset($_GET['sleep']) ? $_GET['sleep'] : 0);
    exit();
}
?>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>jQuery AjaxStartDelay plugin sample</title>
        <link rel="stylesheet" href="sample.css">
        <script src="../lib/jquery.js"></script>
        <script src="../jquery.ajaxstartdelay.min.js"></script>
        <script src="sample.js"></script>
    </head>
    <body>
        <div class="ajaxstatus">
            <p>Please wait a few seconds</p>
            <p><img src="ajax-loader.gif"/></p>
        </div>
        
        <div class="contentwrapper">
            <h1>jQuery AjaxStartDelay plugin sample</h1>            
            <p>This sample shows the functionality of the jQuery AjaxStartDelay plugin. Click the buttons to test a scenario.</p>
            <hr>
            <h2>Fast AJAX response</h2>
            <p>
                Clicking this button will cause the server to respond within <b>a second</b>. A user accepts 
                this delay without being noticed that the request may take a while. Therefore the ajaxStartDelay handler will
                not be called and no notification shows up.
            </p>    
            <a href="#" class="button" id="btnResponseFast">Request fast AJAX-response</a>       
            <div id="responseFast" class="response">
                Got a fast response from the server, right? User didn't see a notification bar at the top.
            </div>
            <hr>
            <h2>Slow AJAX response</h2>
            <p>
                Clicking this button will cause the server to respond in <b>five seconds</b>. A user doesn't accept
                this delay without being noticed that the request may take a while. Therefore the ajaxStartDelay handler will
                be called and a notification bar shows up at the top.
            </p>    
            <a href="#" class="button" id="btnResponseSlow">Request slow AJAX-response</a>       
            <div id="responseSlow" class="response" id="btnResponseSlow">
                Got a slow response from the server, right? User did see a notification bar at the top.
            </div>
            <hr>
            <p>
                <a href="http://www.invetek.nl">Invetek - Loran Kloeze</a> | <a href="https://github.com/invetek/jquery-ajaxstartdelay">https://github.com/invetek/jquery-ajaxstartdelay</a>
            </p>
        </div>
        
    </body>
</html>
