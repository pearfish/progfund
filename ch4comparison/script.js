var a = 123;
var b = "123";

/* equality check
 == checks for _equality_, will return true for different variable types that
 are still pretty similar

 === checks for _strict equality_, will only return true if a and b are equal and of the same variable type
*/
if ( a === b ) {
   alert("Yes, they ARE equal");
} else {
   alert("No, they're NOT equal");
}
