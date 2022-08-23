function receivesAFunction(callbackFunc){
    callbackFunc();
};

function returnsANamedFunction(){
    return myFunc = function(){
        console.log("Immediately invoked function execution");
    }
};

function returnsAnAnonymousFunction(){
    return (function(){
        console.log('Immediately invoked function execution');
})
};