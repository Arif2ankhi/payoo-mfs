document.getElementById('btn-cash-out')
    .addEventListener('click', function(event){
        event.preventDefault();
        console.log('Cash out button clicked');

        const cashOut = document.getElementById('input-cash-out').value;
        const cashOutNumber = parseFloat(cashOut)
        
        const pinNumber = document.getElementById('input-cash-out-pin').value;
        console.log(cashOut, pinNumber);
        //  wrong way to verify the pin 

        if( pinNumber === '1234'){
            const balance = document.getElementById('account-balance').innerText
            const balanceNumber = parseFloat(balance);
            //reduce the balance 
            const newBalance = balanceNumber - cashOutNumber;
            // update the ui 
            document.getElementById('account-balance').innerText = newBalance;
        }
        else{
            alert('Failed to cash out , please  try again later ')
        }
    });