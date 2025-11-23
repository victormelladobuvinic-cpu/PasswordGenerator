const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];


/*let randomIndex = Math.floor(Math.random() * characters.length)*/
let inputValue = 0
let numOfCharacters = 0
let passwordItemsOne = []
let passwordItemsTwo = []
let pswOne = document.querySelector('#psw-one')
let pswTwo = document.querySelector('#psw-two')



function generatePassword() {
    
inputValue = document.querySelector('#input-one')
 numOfCharacters = inputValue.valueAsNumber

for (let i = 0; i < numOfCharacters; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    passwordItemsOne.push(characters[randomIndex])
}

for (let i = 0; i < numOfCharacters; i++) {
    let randomIndex = Math.floor(Math.random() * characters.length)
    passwordItemsTwo.push(characters[randomIndex])
}
 let passwordOne = passwordItemsOne.join('')
 let passwordTwo = passwordItemsTwo.join('')
   
pswOne.textContent = passwordOne
pswTwo.textContent = passwordTwo

passwordItemsOne = []
passwordItemsTwo = []

 }

 
