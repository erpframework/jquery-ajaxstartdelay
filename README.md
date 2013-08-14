jQuery-AjaxStartDelay
=================

A small jQuery plugin providing a delay to be set before the handler is called in jQuery's .ajaxStart()


##Why this plugin?

The [.ajaxStart](http://api.jquery.com/ajaxStart/) event handler in jQuery calls the handler immediately when the ajaxStart event is triggered. In other words: when the AJAX request is made the handler is called. Most of the time the handler is used to show the user some kind of notice like 'please wait a minute' while the AJAX request-response cycle is on it's way. It's annoying to see this notice everytime an AJAX request is made. It's nicer when this notice only shows up when the request-response cycle takes longer then a few seconds. This plugin provides the functionality to delay the call to the handler. 

The plugin is simply a wrapper around the .ajaxStart event handler.

##Installing

Grab jquery.ajaxstartdelay.js from the repository and insert the following line _after_ the jQuery script in your code:
```html
<script src="jquery.ajaxstartdelay.js"></script>
```

That's all.

##Usage

```javascript
$(document).ajaxStartDelay([delay], handler)
```
* **delay:** delay in _ms_ before calling the handler
* **handler:** function to be called when AJAX request-responsecycles are still running and delaytime is elapsed

From http://api.jquery.com/ajaxStart/

>Whenever an Ajax request is about to be sent, jQuery checks whether there are any other outstanding Ajax requests. If >none are in progress, jQuery triggers the ajaxStart event. Any and all handlers that have been registered with the >.ajaxStart() method are executed at this time.

The difference between the above and this plugin is the delay before the handler is called. Keep in mind that the event _ajaxStart_ is immediately triggered. Only the call to the handler is delayed.

Just like jQuery's .ajaxStart as of jQuery 1.8 the .ajaxStartDelay should only be attached to the _document_ object. Check the documentation at http://api.jquery.com/ajaxStart/.

##Example

Make sure the jQuery and plugin scripts are loaded.

```html
<div id="ajax-statuspanel" style="display: none;">
  <p>Please wait a few seconds</p>
  <p><img src="ajax-load.gif"/></p>
</div>

<script>

  // Attach the handler for displaying #ajax-statuspanel when the request-response cycle
  // takes more then 2000 ms. 
  $(document).ajaxStartDelay(2000, function(){
    $("#ajax-statuspanel").fadeIn();
  })
  
  // Attach the handler for undisplaying the ajax-statuspanel when all request-response cycles
  // is finished. Just use jQuery's .ajaxStop event handler
  $(document).ajaxStop(function(){
    $("#ajax-statuspanel").fadeOut();
  })
  
</script>
```

Check out the [sample](sample) in the repository for a full example. 


