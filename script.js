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
    const generateRandom = Math.round(Math.random()*100)
    textBox.value = generateRandom;
    if (generateRandom === randomNumber) {
        alert(`You won the number was ${randomNumber}! You took ${attempts} attempt/s`)
        
    }
    else if (generateRandom < randomNumber) {
        document.getElementById("please").textContent = `Unlucky, the number is greater than ${generateRandom}`
    }
    else if (generateRandom > randomNumber) {
        document.getElementById("please").textContent = `Unlucky, the number is lower than ${generateRandom}`
    }
})

