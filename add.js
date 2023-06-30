const getColor = () => {
    // Hex Code 
    let randomNum = Math.floor(Math.random() * 16777215)
    let randomCode = "#" + randomNum.toString(16)
    document.body.style.backgroundColor = randomCode
    document.getElementById("color-code").innerText = randomCode;
}

document.getElementById("btn").addEventListener(
    "click",
    getColor
)

getColor();