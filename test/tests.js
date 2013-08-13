/*!
 * jQuery AjaxStartDelay Plugin Test Suite
 * https://github.com/invetek/jquery-ajaxstartdelay
 *
 * Copyright 2013 Loran Kloeze - Invetek
 * Released under the MIT license
 */

test("is chainable", function(){
    expect(1);
    var $document = $(document); //We can't use a fixture
 
    ok($document.ajaxStartDelay(1, ajaxStartDelay_Callable) instanceof jQuery);  
    
    //Remove previously attached trigger to keep test atomic
    $document.off('ajaxStart');    
});

asyncTest("call .ajaxStartDelay handler w/o delay", function(){    
    expect(1);
    var $document = $(document); //We can't use a fixture
    
    $document.ajaxStartDelay(ajaxStartDelay_Callable);
    $document.trigger('ajaxStart');
    
    //Remove previously attached trigger to keep test atomic
    $document.off('ajaxStart');
    
    
});

asyncTest("call .ajaxStartDelay handler w/ delay as NaN", function(){    
    expect(1);
    var $document = $(document); //We can't use a fixture
    
    $document.ajaxStartDelay('xx', ajaxStartDelay_Callable);
    $document.trigger('ajaxStart');
    
    //Remove previously attached trigger to keep test atomic
    $document.off('ajaxStart');
    
    
});

asyncTest("call .ajaxStartDelay handler w/ 1000 ms delay", function(){    
    expect(1);
    var $document = $(document); //We can't use a fixture
    
    $document.ajaxStartDelay(1000, ajaxStartDelay_Callable);
    $document.trigger('ajaxStart');
    
    //Remove previously attached trigger to keep test atomic
    $document.off('ajaxStart');
    
});

asyncTest("disarming handler in 995 ms before 1000 ms delay is over", function(){    
    expect(1);
    var $document = $(document); //We can't use a fixture
    
    $document.ajaxStartDelay(1000, ajaxStartDelay_NonCallable);    
    
    $document.trigger('ajaxStart');    
    setTimeout(function(){ //Simulating ajax request-response cycle
        $document.trigger('ajaxStop');
        ok(true);
        start();
    }, 995);
    
    //Remove previously attached trigger to keep test atomic
    $document.off('ajaxStart');
    
});

function ajaxStartDelay_Callable(){
    ok(true);
    start();
}

function ajaxStartDelay_NonCallable(){
    ok(false, 'ajaxStartDelay handler should not be called');
    start();
}