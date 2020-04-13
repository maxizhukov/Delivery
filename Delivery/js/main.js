const cartButton = document.querySelector("#cart-button");
const modal = document.querySelector(".modal");
const close = document.querySelector(".close");
const buttonCancel = document.querySelector("#button-cancel");

cartButton.addEventListener("click", toggleModal);
close.addEventListener("click", toggleModal);

buttonCancel.addEventListener("click", toggleModal);
 close.addEventListner("click", toggleModal);

function toggleModal() {
    modal.classList.toggle("is-open");
}

new WOW().init();
