function setTime(){
    console.log('Hello Javascript');
};

console.log('Hello I am First');
console.log('Hello I am Second');
setTimeout(() => {
    console.log('Hello SetTime Out zone');
}, 5000);

setTimeout(function (){
    console.log('Hello Funntion');
}, 4000);
console.log('Hello I am their');
console.log('Hello I am Four');
