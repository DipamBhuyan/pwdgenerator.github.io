//generate password
function getPassword() {
    const chars =
    "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz@#$%&*()_+?><:{}[]'";
    
    let passwordLength = 12;
    let password = '';

    for (let i = 0; i <passwordLength; i++) {
        let randomNumber = Math.floor(Math.random() * chars.length);

        password += chars.substring(randomNumber, randomNumber + 1);
    }
    document.getElementById('password').value = password;
    
    document.getElementById("history").innerHTML += password + "<br />";
}


//send the password through email
    const scriptURL = 'https://script.google.com/macros/s/AKfycbzBoAgAyWLCTUPBNfMXv9Ufd3ijOER0Szc2Gq02lDs-OlRn3AgrH9qshwdcoExnesxEGg/exec'
    const form = document.forms['google-sheet']
          
    form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
    .then(response => alert("Thanks for Contacting us..! We Will Contact You Soon..."))
    .catch(error => console.error('Error!', error.message))
})
