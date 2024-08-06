const user = {
    username : "kishlay",
    price : 9999,
    welconeMessage: function() {
        console.log(`${this.username}, welcome to website`);
    }
}
user.welconeMessage()
user.username = "sam"
user.welconeMessage()
console.log(this);
// this is used to show the current context of the user 
// this work only in object not in function
function chai () {
    console.log(this.username);
}
chai()
// fat arrow function 
const kishlay = (num1, num2) => {
return num1 + num2
}
console.log(kishlay(3,4))