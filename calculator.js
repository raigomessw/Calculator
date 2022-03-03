const numberElements = document.getElementsByClassName("calc_number");
const signElements = document.getElementsByClassName("calc_sign");
const result = document.getElementById("result");
const resultsList = document.getElementById("results");
let firstInput = true;

/*for (let i = 0; i < numbers.length; i++) {
    numbers[i].addEventListener("click", function() {
        console.log("tryck")

    })


}*/

/*Array.from(numbers).forEach((number) => {
    number.addEventListener("click", function() {
        console.log("tryck")

    })
});*/

for (const numberElement of numberElements) {
    numberElement.addEventListener("click", function() {
        buttonListener(numberElement);
    })
}

for (const signElement of signElements) {
    signElement.addEventListener("click", function() {
        buttonListener(signElement);
    })
}





function display(value) {

    if (firstInput) {
        clearResult();
        firstInput = false;

    }
    result.innerText += value;

}

function clearResult() {
    result.innerText = "";
}


function buttonListener(button) {

    if (button.innerText == '=') {
        calculate()
    } else {
        display(button.innerText);
    }

}

function calculate() {

    let res = eval(result.innerText);
    display("=" + res);
    firstInput = true;
    displayResults(result.innerText);

}

function displayResults(value) {
    const listItem = document.createElement("li");
    listItem.innerText = value;
    resultsList.appendChild(listItem);

}

/*function clearResultBlock() {

    resultsList.innerText = "";

}*/