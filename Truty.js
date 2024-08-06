let email = "kumarkishlay.ac@gmail.com"
if (email) {
    console.log("we got the email");
}
else {
    console.log("we not got the email");
}
// falsy value 
// 0 , -0, bigint, 0n, "", null undefined, NaN


// truthy value 
// "0", 'false', "", [],  {},  function(){}
// to check the array is empty or not 
if (email.length=== 0) {
    console.log("array is empty");  
}
else {
    console.log("arry is not empty");
}
// to check the object is empty or not 
const empobj = {};
if (Object.keys(empobj).length === 0) {
    console.log("object is empty"); 
}
else {
    console.log("object is not empty");
}