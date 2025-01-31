const numberCheck = document.getElementById("numberCheck")
const luckCheck = document.getElementById("luckCheck")
const randomNumber = Math.round(Math.random()*100)
let check = true;
let attempts = 0;

console.log(randomNumber);

numberCheck.addEventListener("click", function(){
    attempts++;
    const textBox = document.getElementById("numberInput").value
    if (textBox == randomNumber) {
        alert(`You won the number was ${randomNumber}! You took ${attempts} attempt/s`)
        while (check) {
            let reload = prompt("Do you want to replay? y/n");
            if (reload === "y") {
                location.reload()
                check = false;
            }
            else if (reload === "n") {
                alert("Okay, goodbye")
                window.close()
                check = false;
            }
            else {
                alert("please type a valid command")
            }
        }
    } 
    else if (textBox < randomNumber) {
        document.getElementById("please").textContent = `Write a number greater than ${textBox}`
    }
    else if (textBox > randomNumber) {
        document.getElementById("please").textContent = `Write a number lower than ${textBox}`
    }
})

luckCheck.addEventListener("click", function(){
    attempts++;
    const textBox = document.getElementById("numberInput")
    const generateChance = Math.round(Math.random()*26)
    let generateRandom = Math.round(Math.random()*100) // fixed by making it into a "let" instaed of const

    if (generateChance === 13) { // if you roll 13, generateRandom value will be equal to current randomNumber
        generateRandom = randomNumber
    }

    textBox.value = generateRandom; // for every occurence of click textbox value will change

    if (generateRandom === randomNumber) {
        alert(`You won the number was ${randomNumber}! You took ${attempts} attempt/s`)
        while (check) {
            let reload = prompt("Do you want to play again? y/n")
            if (reload === "y") {
                location.reload();
                check = false;
            }
            else if (reload === "n") {
                window.close();
                check = false;
            }
            else {
                alert("please enter a valid command");
            }
        }
        
    }
    else if (generateRandom < randomNumber) {
        document.getElementById("please").textContent = `Unlucky, the number is greater than ${generateRandom}`
    }
    else if (generateRandom > randomNumber) {
        document.getElementById("please").textContent = `Unlucky, the number is lower than ${generateRandom}`
    }
})

