

document.getElementById("login-btn").addEventListener('click', function(event){
    event.preventDefault(); /*important*/

    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById('pin-number').value;
    const myPhoneNumber = '01931536316';
    const myPinNumber = '2745';

    if(phoneNumber === myPhoneNumber && pinNumber === myPinNumber){
        window.location.href = 'home.html'
    }
    else{
        alert('wrong phone number or pin number')
    }
    

});