jQuery-AjaxStartDelay
=================

A small jQuery plugin providing a delay to be set before the handler is called in jQuery's .ajaxStart()  

##Installing

Grab jquery.ajaxstartdelay.js from the repository and insert the following line _after_ the jQuery script in your code:
```html
<script src="jquery.ajaxstartdelay.js"></script>
```

That's all.

##Use

```javascript
$(document).ajaxStartDelay([delay], handler)
```
* **delay:** delay in _ms_ before calling the handler
* **handler:** function to be called when AJAX request-responsecycle is still running and delaytime is elapsed

Just like jQuery's .ajaxStart the .ajaxStartDelay should only be attached to the _document_ object. Check the documentation at http://api.jquery.com/ajaxStart/.
