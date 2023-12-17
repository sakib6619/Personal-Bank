//  project bank 
// long in button handler
const loginBtn = document.querySelector("#login");
loginBtn.addEventListener("click", function () {
    const loginArea = document.querySelector("#login-area");
    loginArea.style.display = "none"
    const afterLogin = document.querySelector("#after-login");
    afterLogin.style.display = "block"
});

// get input Function 
function getInputNumber(id) {
    const amount = document.querySelector(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}
// update span tag function
function updateSpanText(id, depositNumber) {
    const current = document.querySelector(id).innerText;
    const currentNumber = parseFloat(current);
    const totalBalance = depositNumber + currentNumber;
    document.querySelector(id).innerText = totalBalance;
}
// deposit button handler

const depositBtn = document.querySelector("#deposit");
depositBtn.addEventListener('click', function () {
    const depositNumber = getInputNumber("#deposit-amount");

    updateSpanText("#current-value", depositNumber);
    updateSpanText("#current-Balance", depositNumber);
    document.querySelector("#deposit-amount").value = "";

});

// withdraw button handler
const withdrawBtn = document.querySelector("#withdraw");
withdrawBtn.addEventListener('click', function () {
    const withdrawNumber = getInputNumber("#withdraw-amount");

    updateSpanText("#deposit-value", withdrawNumber);
    updateSpanText("#current-Balance", -1 * withdrawNumber);

    document.querySelector("#withdraw-amount").value = "";
});

// function withdrawSpanText(id, withdrawNumber) {
//     const current = document.querySelector(id).innerText;
//     const currentNumber = parseFloat(current);
//     const totalBalance = currentNumber - withdrawNumber;
//     document.querySelector(id).innerText = totalBalance;
// }