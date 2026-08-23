const mobilemenu = document.querySelector(".mobile-menu");
const menubtn = document.querySelector(".menu-btn");
const closebtn = document.querySelector(".close-btn");
const mobileLinks = mobilemenu.querySelectorAll("a");

menubtn.addEventListener("click", function () {
    mobilemenu.classList.add("open");
});

closebtn.addEventListener("click", function () {
    mobilemenu.classList.remove("open");
});

mobileLinks.forEach(function (link) {
    link.addEventListener("click", function () {
        mobilemenu.classList.remove("open");
    });
});

/********************************* */

const prices = document.querySelectorAll(".price");
const billedInfo = document.querySelectorAll(".billed-info");

const monthlyPrices = ["$0", "$19", "$49"];
const yearlyPrices = ["$0", "$15", "$39"];

const toggleOptions = document.querySelectorAll(".toggle-option");

toggleOptions.forEach(function (option) {

    option.addEventListener("click", function () {

        toggleOptions.forEach(function (opt) {
            opt.classList.remove("active");
        });

        option.classList.add("active");

        if (option.textContent.includes("Yearly")) {

            prices.forEach(function (price, index) {
                price.textContent = yearlyPrices[index];
            });

            billedInfo.forEach(function (info) {
                info.style.display = "block";
            });

        } else {

            prices.forEach(function (price, index) {
                price.textContent = monthlyPrices[index];
            });

            billedInfo.forEach(function (info) {
                info.style.display = "none";
            });

        }
    });
});

/********************************* */

const form = document.querySelector(".contact-form");

const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const messageInput = document.querySelector("#message");

const nameError = document.querySelector("#name-error");
const emailError = document.querySelector("#email-error");
const messageError = document.querySelector("#message-error");

const successMessage = document.querySelector(".form-success");
const sendAnother = document.querySelector(".send-another");

const emailPattern =
    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


  form.addEventListener("submit", function (e) {

    e.preventDefault();

    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const messageValue = messageInput.value.trim();

     let isValid = true;

    if (nameValue === "") {

        nameError.textContent = "Name is required";
        nameInput.classList.add("input-error");

        isValid = false;

    } else {

        nameError.textContent = "";
        nameInput.classList.remove("input-error");

    }

    if (emailValue === "") {

        emailError.textContent = "Email is required";
        emailInput.classList.add("input-error");

        isValid = false;

    } else if (!emailPattern.test(emailValue)) {

        emailError.textContent = "Enter a valid email address";
        emailInput.classList.add("input-error");
        isValid = false;

    } else {
        emailError.textContent = "";
        emailInput.classList.remove("input-error");

    }

    if (messageValue === "") {

        messageError.textContent = "Message is required";
        messageInput.classList.add("input-error");
        isValid = false;

    } else if (messageValue.length < 10) {

        messageError.textContent = "Message must be at least 10 characters";
        messageInput.classList.add("input-error");
        isValid = false;

    } else {
        messageError.textContent = "";
        messageInput.classList.remove("input-error");

    }

    if (isValid) {
        form.style.display = "none";
        successMessage.classList.add("show");

    }

});

sendAnother.addEventListener("click", function () {

    successMessage.classList.remove("show");
    form.style.display = "block";
    form.reset();

    nameError.textContent = "";
    emailError.textContent = "";
    messageError.textContent = "";

    nameInput.classList.remove("input-error");
    emailInput.classList.remove("input-error");
    messageInput.classList.remove("input-error");

});