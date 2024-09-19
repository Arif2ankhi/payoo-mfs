// console.log('log in form with js ')

// Home work : form submit reloading the page 


// step -1 : set event handler

// document.getElementById('button-login')
// .addEventListener('click', function(event){
//     // prevent default behaviour
//     event.preventDefault();
// // step3: get the phone number and pin number 
// const phoneNumber = document.getElementById('phone-number').value;
// const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber, pinNumber);

// // step 5 validate phone and pin number
// if(phoneNumber === '5' && pinNumber ==='1234'){
//     console.log('you are logged in');

// }
// else{
//     alert('wrong phone number or pin')
// }
// })

document.getElementById('button-login')
    .addEventListener('click', function(event){
        event.preventDefault();
        
// get phone  number and the pin 

const phoneNumber = document.getElementById('phone-number').value;
const pinNumber = document.getElementById('pin-number').value;
// console.log(phoneNumber, pinNumber)
// bad way to validate
if(phoneNumber === '5' && pinNumber ==='1234'){
    console.log('you are log in');
    window.location.href = './home.html';

}
else{
    alert('Wrong phone number or pin ');
}
    

});