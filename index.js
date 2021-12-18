function receivesAFunction(callback){
    callback()
}

function returnsANamedFunction() {
   let returningFunction = () => {

   }
   return returningFunction
}

function returnsAnAnonymousFunction() {
   return () => {

    }
}

