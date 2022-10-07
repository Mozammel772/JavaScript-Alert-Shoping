console.log('I Am Here');

const maComing = () =>{
    alert('ma is coming');
};
const picnicGoing = () => {
   const response = confirm('Are You Sure Going To Picnic!!!');
    console.log(response);
    if(response === true) {
        alert('Give Me picnic Fee My Bkash Wallet Address!!!');
    }
    else{
        alert('Get Out !!! Sorry ')
    }
};
const joinGoing = () =>{
   const joinNow = prompt('Please Give Me Our Address!!');
   console.log(joinNow);
   if(joinNow) {
    console.log('Hello')
   }
}