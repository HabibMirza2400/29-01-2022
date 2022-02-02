// const str ="Maharashtra";
// const arr1 = str.split("");
// const obj = {};
// arr1.forEach((ela) => {
//     obj[ela] = obj[ela] ? obj[ela] + 1 : 1;
// });
// console.log(obj);

const str = "India is my Country";
const obj = {};
str.split("").forEach((elem)=>
    obj[elem] = obj[elem] ? obj[elem]+ 1 : 1);

