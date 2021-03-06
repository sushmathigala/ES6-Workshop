
// By default the scope for any variable is window scope. If we define a variable inside a function, it takes that scope.

// In javascript mainly in functional programming, functions are first class citizens.

/*
Var is used to define a variable and it's scope is limited to function scope.
*/
var setWidth = function() {
    var width = 100;
    console.log(width);
  }
  setWidth();
  var age = 100;
  if(age > 12) {
    var years = age * 7;
    console.log(`You are ${years} years old!`);
  }


  //More examples  --- Variable Hoisting is JavaScript's default behavior of moving declarations to the top.

  function setHeight(){
      console.log("Outside block --- height is "+ height);
      if(true){
        var height = 100;
        console.log("Inside block --- height is "+ height);
      }
  }

   // How do we acheive block scoping in ES5
   /*
    In ES5, only calling a function creates a new scope.
    So "obviously", if you want to create a new scope (per iteration), you have to call a function.
    That's what an IIFE does: It creates a new function and calls it immediately.

    Any variable that would be block scoped (e.g. via let) would become a parameter of the function and initial values would be passed as arguments.
    */
    var callbacks = [];
    for (var i = 0; i <= 2; i++) {
        (function (i) {
            callbacks[i] = function() { return i * 2; };
        })(i);
    }
   