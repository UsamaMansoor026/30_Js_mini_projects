/* Inputs Fields */
const cardNumInput = document.getElementById("cardNo");
const cardholderNameInput = document.getElementById("cardHolderName");
const cardValidityInput = document.getElementById("cardValidity");
const tag = document.querySelector(".tag");

/* Generate Button */
const generate = document.getElementById("generate");

/* Card Info */
const cardNumber = document.getElementById("cardnumber");
const cardValidDate = document.getElementById("cardValidDate");
const cardHolderName = document.getElementById("holderName");

generate.addEventListener("click", () => {
  cardNumber.innerHTML = cardNumInput.value;
  cardValidDate.innerHTML = cardValidityInput.value;
  cardHolderName.innerHTML = cardholderNameInput.value;
  tag.style.display = "flex";

  cardNumInput.value = "";
  cardValidityInput.value = "";
  cardholderNameInput.value = "";
});
