// objectis declared in two type 1. literal 2.constructor 
// when we declared object in the form of constructor than it is a sigleton 
// // object literal 
const mysym = Symbol("key")
const jessus = {
    [mysym] : "mykey1" ,
    name : "kishlay",
    last_name : "kumar",
    email : "kumarkishlay.ac@gmail.com",
    age : 45
}
console.log(jessus.age)
console.log(jessus["name"]);
console.log(jessus[mysym]);
// INTERVIEW QUESTION 
const greating = "";
const greating1 = ""
jessus.greating = function () {
    console.log("hello user");
}
jessus.greating1 = function () {
    console.log(`hello from another world, ${this.email}`)
}
console.log(greating)
console.log(greating1)

