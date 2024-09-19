// 1.*Add event listener to add money button ( form submit )*
// * make sure to prevent default so that page does nt reload 
// 2. get the money user want to add
//  also get the pin numbr provided 
//  verify the  pin number , for wrong pin  for wrong pin ==> fail to add . for right pin ++> allow to add 

// ? get the current balance 

// add money added to the curren balance 

document.getElementById('btn-add-money')
    .addEventListener('click', function(event){
        event.preventDefault();
        // console.log('added the event handlar');

        // get money and pin number
        const addMoney = document.getElementById('input-add-money').value;
        const addMoneyNumber = parseFloat(addMoney);
        const pinNumber = document.getElementById('input-pin-number').value;

        // console.log(addMoney . pinNumber)

        if(pinNumber === '1234'){
            //  add money to the account 
            const balance = document.getElementById('account-balance').innerText;
            const balanceNumber = parseFloat(balance);
            // new balance
            const newBalance = balanceNumber + addMoneyNumber

            // updated the dom with updated balance 
            document.getElementById('account-balance').innerText = newBalance;


        }
        else{
            alert('Failed to add money , please try later');
        }
    });

