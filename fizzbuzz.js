function fizzBuzz(list1, list2) {
    // Your code here
        var a = list1.length;
        var b = list2.length;
        var x = a + b;
        var y = x % 3;
        var z = y % 5;
        fizz = 'Fizz';
        buzz = 'Buzz';
        fizzbuzz = 'Fizzbuzz';
        if ((x % 3) == 0 && ((x% 5) != 0)) {
        console.log("fizz");
        return fizz;
        } 
        else if((x % 5) == 0 && (x % 3) != 0){
            console.log("Buzz");
          return buzz;
        }
        else  if (y == 0 && z == 0) {
            console.log("fizzbuzz");
          return fizzbuzz;
        } 
         else {
           return x;
        
         }
       
        
        
}
var arr1 = [1,4,9,2,3,5,6,7];
var arr2 = [0,1,2,3,4,5,6];
fizzBuzz(arr1,arr2);
module.exports = fizzBuzz;//