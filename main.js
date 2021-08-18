const marchTicketPrice = 1000;
const moonTicketPrice = 1000;
let value1 = 0;
let value2 = 0;

// updated function----

function updatedTotall() {
    document.getElementById("total-cost").innerText = value1 + value2;
}

//1
function inputFeildUp(inputId) {
    const inputValue = document.getElementById(inputId);
    let inputText = inputValue.value;
    let inputNumber = parseFloat(inputText);
    const ticket = (inputValue.value = inputNumber + 1);
}
//2
function inputFeildDown(inputId) {
    const inputValue = document.getElementById(inputId);
    let inputText = inputValue.value;
    let inputNumber = parseFloat(inputText);
    const ticket = (inputValue.value = inputNumber - 1);
}
//3
function totalUp(totalId, ticket) {
    const total = document.getElementById(totalId);
    const ammount = parseFloat(total.innerText);
    const totalAmmount = ammount + ticket;
    total.innerText = totalAmmount;
    return totalAmmount;
}
//4
function totalDown(totalId, ticket) {
    const total = document.getElementById(totalId);
    const Ammount = parseFloat(total.innerText);
    const totalAmmount = Ammount - ticket;
    total.innerText = totalAmmount;
    return totalAmmount;
}

document.getElementById("march-up").addEventListener("click", function () {
    let ticket = inputFeildUp("march-input");
    let ticketprice = totalUp("march-total", marchTicketPrice);
    value1 = ticketprice;
    updatedTotall();
});
document.getElementById("march-down").addEventListener("click", function () {
    let ticket = inputFeildDown("march-input");
    let ticketprice = totalDown("march-total", marchTicketPrice);
    value1 = ticketprice;
    updatedTotall();

});

document.getElementById("moon-up").addEventListener("click", function () {
    let ticket = inputFeildUp("moon-input");
    let ticketprice = totalUp("moon-total", moonTicketPrice);
    value2 = ticketprice;
    updatedTotall();
});

document.getElementById("moon-down").addEventListener("click", function () {
    let ticket = inputFeildDown("moon-input");
    let ticketprice = totalDown("moon-total", moonTicketPrice);
    value2 = ticketprice;
    updatedTotall();
});