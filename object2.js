const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj3 = {5: "a", 6: "c"}
const obj4 = {...obj1,...obj2,...obj3}
console.log(obj4`
 
`)
/////////////////////////////////////////////
//object destructiure
const   course = {
    courseName : "science",
    grade : "english",
    courseInstructor : "kishlay kumar"

}
const {courseInstructor} = course
console.log(courseInstructor)