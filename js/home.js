// add money to the account 
// step 1 add event handler 
// 
// prevent page reload 
// step:2 

document.getElementById('btn-add-money').addEventListener('click', function(event){

    //  prevent page reload
    event.preventDefault();
//   step 2: get money to be added to account
const addMoneyInput = document.getElementById('input-add-money').value;
console.log(addMoneyInput);

//  get the pin number provided('
const pinNumber = document.getElementById('input-pin-number').value;
console.log(pinNumber)

})