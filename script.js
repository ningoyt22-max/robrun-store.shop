const slider = document.getElementById("slider");

const amount = document.getElementById("amount");
const price = document.getElementById("price");
const bonus = document.getElementById("bonus");
const total = document.getElementById("total");
const bonusPercentElement = document.getElementById("bonusPercent");

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

    let bonusAmount =
        Math.floor(
            currencyAmount * bonusPercent / 100
        );

    let finalAmount =
        currencyAmount + bonusAmount;

    amount.textContent =
        currencyAmount.toLocaleString("ru-RU");

    price.textContent =
        cost.toLocaleString("ru-RU") + " ₽";

    bonus.textContent =
        bonusAmount.toLocaleString("ru-RU");

    total.textContent =
        finalAmount.toLocaleString("ru-RU");

    bonusPercentElement.textContent =
        bonusPercent + "%";
}

if (slider) {

    slider.addEventListener(
        "input",
        updateCalculator
    );

    updateCalculator();
}

/* ====================================
   КНОПКА ПОКУПКИ
==================================== */

const buyButton =
document.querySelector(".buy-button");

if (buyButton) {

    buyButton.addEventListener("click", () => {

        alert(
            "Для покупки необходимо авторизоваться."
        );

        window.location.href =
        "login.html";

    });

}

/* ====================================
   ПЛАВНОЕ ПОЯВЛЕНИЕ БЛОКОВ
==================================== */

const observer =
new IntersectionObserver((entries) => {

    entries.forEach(entry => {

        if (entry.isIntersecting) {

            entry.target.classList.add("show");

        }

    });

},{
    threshold:0.15
});

document
.querySelectorAll(
".feature,.bonus-card,.review,.item"
)
.forEach(el => {

    el.classList.add("hidden");

    observer.observe(el);

});

/* ====================================
   СЧЕТЧИК СТАТИСТИКИ
==================================== */

const counters =
document.querySelectorAll("[data-counter]");

counters.forEach(counter => {

    let target =
    parseInt(counter.dataset.counter);

    let current = 0;

    let increment =
    target / 100;

    const updateCounter = () => {

        current += increment;

        if(current < target){

            counter.textContent =
            Math.floor(current);

            requestAnimationFrame(
                updateCounter
            );

        }else{

            counter.textContent =
            target.toLocaleString(
                "ru-RU"
            );

        }

    };

    updateCounter();

});

/* ====================================
   ГОД В FOOTER
==================================== */

const footerYear =
document.getElementById("year");

if(footerYear){

    footerYear.textContent =
    new Date().getFullYear();

}