const coding = ["java", "python", "c plus", "etc"]
const valus = coding.forEach((item) => {
return item;
})
console.log(valus)
// for each not return value
/// FILTER
const counting = [1,2,3,4,5,6,7,8,9];
const number = counting.filter((nums) => {
    return nums > 4
})
console.log(number);
// map not required return type
const numbers = [1,2,3,4,5,6,7,8,13,14,54,65];
const ans = numbers.map((con) => 
con +10
)
console.log(ans);