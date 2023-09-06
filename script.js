
const qrCode = document.getElementById('qr-code');
const profile = document.getElementById('profile');

qrCode.addEventListener('click', (e) =>{
    e.preventDefault()
    
    window.location.href = 'card.html';
    // if (qrCode.style.display === 'none') {
    //     qrCode.style.display = "block";
    //     profile.style.display = "none";
    // } else {
    //     qrCode.style.display = "none";
    //     profile.style.display = "block";        
    // }

});