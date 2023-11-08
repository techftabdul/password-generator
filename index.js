const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*",".","?","/"];

let passwordLength = 15

function getRandomCharacter() {
    let randomCharacter = Math.floor(Math.random() * characters.length)
    return characters[randomCharacter]
}

function generatePass() {
    let randomPassword = ""
    for ( let i = 0; i < passwordLength; i++ ) {
        randomPassword += getRandomCharacter()
        }
    return randomPassword 
}

function generatePassword() {
        document.getElementById("first-password").value = generatePass()
        document.getElementById("second-password").value = generatePass()
}

function copyFunctionA() {
    const copyFirstPassword = document.getElementById("first-password")
    copyFirstPassword.select()
    document.execCommand("copy");
    alert("Copied the password: " + copyFirstPassword.value);

}

function copyFunctionB() {
    const copySecondPassword = document.getElementById("second-password")
    copySecondPassword.select()
    document.execCommand("copy");
    alert("Copied the password: " + copySecondPassword.value);
}
    

 




