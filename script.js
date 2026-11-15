const slider = document.getElementById("slider");

const amount = document.getElementById("amount");
const price = document.getElementById("price");
const bonus = document.getElementById("bonus");
const total = document.getElementById("total");

function updateCalculator() {

    let currencyAmount = parseInt(slider.value);

    let cost = (currencyAmount / 100000) * 70;

    let bonusPercent = 0;

    if (currencyAmount >= 10000000) {

        bonusPercent = 25;

    } else if (currencyAmount >= 5000000) {

        bonusPercent = 20;

    } else if (currencyAmount >= 1000000) {

        bonusPercent = 15;

    }

    let bonusAmount = Math.floor(
        currencyAmount * bonusPercent / 100
    );

    let totalAmount =
        currencyAmount + bonusAmount;

    amount.innerText =
        currencyAmount.toLocaleString("ru-RU");

    price.innerText =
        cost.toLocaleString("ru-RU") + " ₽";

    bonus.innerText =
        bonusAmount.toLocaleString("ru-RU");

    total.innerText =
        totalAmount.toLocaleString("ru-RU");

}

slider.addEventListener(
    "input",
    updateCalculator
);

