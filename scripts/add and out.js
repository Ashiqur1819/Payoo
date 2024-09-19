document.getElementById("toggle-cashout-btn").addEventListener('click', function(){
    const addMoneyContainer = document.getElementById("add-money-container").classList.add('hidden');
    const cashOutContainer = document.getElementById('cash-out-container').classList.remove('hidden')
});

document.getElementById("toggle-add-money-btn").addEventListener('click', function(){
    // const addMoneyContainer = document.getElementById("add-money-container").classList.remove('hidden');
    // const cashOutContainer = document.getElementById('cash-out-container').classList.add('hidden')

    const cashOutContainer = document.getElementById('cash-out-container').classList.remove('flex')
    console.log(cashOutContainer)

});