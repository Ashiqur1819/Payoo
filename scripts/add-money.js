document.getElementById("add-money-btn").addEventListener('click', function(event){
    event.preventDefault();

    let addMoneyInput = document.getElementById("add-money-input").value;
    let currentBalance = document.getElementById("current-balance").innerText;
    const addMoneyPin = document.getElementById("add-money-pin").value;
    
    if(addMoneyPin === '2745'){
        
        addMoneyInput = Number(addMoneyInput);
        currentBalance = Number(currentBalance);
        
        const newBalance = addMoneyInput + currentBalance;
        document.getElementById("current-balance").innerText = newBalance;
    }
    else{
        alert('Failed to added money. Please try again later.')
    }
});