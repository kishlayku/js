// const myarray = [5,8,9,78,45]
// console.log("my array", myarray)
// const arr1 = myarray.slice(1,3);
// console.log(arr1);
// console.log("a", myarray);
// const arr2 = myarray.splice(1,3);
// console.log(arr2);
// console.log("b", myarray);
const marvel_hero = ["ironman", "thor", "xyz"]
const dc_hero = ["batman", "spiderman", "wert"]
const newone = marvel_hero.concat(dc_hero);
console.log(newone)
const new1 = [...marvel_hero, ...dc_hero]
console.log(new1);
const another_array = [12,56,89,[5,56,89,[56,45,89]] [12,34,56]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array);
