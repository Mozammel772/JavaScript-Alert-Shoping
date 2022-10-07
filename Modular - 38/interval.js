

console.log('Hello World');
console.log('Hello World1');
console.log('Hello World2');
// setInterval(() => {
//     console.log('Hello');
// }, 1000);

// setInterval( function(){
//     console.log('Hello Function');
// },500);
// console.log('Hello World3');
// console.log('Hello World4');

// let count = 0;
//  const setCount = setInterval(() => {
//     count++;
//     console.log(count);
//     if(count > 15){
//         clearInterval(setCount);
//     }
// }, 500);

// let count1 = 0;
// const setCount1 = setInterval( () => {
//     count1++;
//     console.log(count1);
//     if(count1 > 20) {
//         clearInterval(setCount1);
//     }
// }, 500);
let count1 = 0;
const setCount1 = setInterval( () => {
    // count1++;
    // console.log(count1++);
    console.log(++count1);
    if(count1 > 20) {
        clearInterval(setCount1);
    }
}, 500);


setTimeout(() =>console.log("I am Superman"),1000)
console.log("I am Superwoman");