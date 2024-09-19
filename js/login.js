// console.log('log in form with js ')

// Home work : form submit reloading the page 


// step -1 : set event handler

document.getElementById('button-login')
.addEventListener('click', function(event){
    // prevent default behaviour
    event.preventDefault();
console.log('login button clicked');
// step3: get the phone number 
const phoneNumber = document.getElementById('phone-number').value;
console.log(phoneNumber)
})