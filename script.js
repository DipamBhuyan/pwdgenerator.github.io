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

//add the default date
function getDate(){
    var today = new Date();

    document.getElementById("date").value = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
}
