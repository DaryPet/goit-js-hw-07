// Напиши скрипт, який під час набору тексту в інпуті input#name-input
// (подія input) підставляє його поточне значення в span#name - output як ім’я для привітання.
//     Обов’язково очищай значення в інпуті по краях від пробілів.Якщо інпут порожній або
// містить лише пробіли, то замість імені у спан має підставлятися рядок "Anonymous".

const nameInput = document.getElementById("name-input");
const nameOutput = document.getElementById("name-output");

function inputHandler(event) {
  const inputValue = event.target.value.trim();
  //   console.log(event.target.value);
  //   nameOutput.textContent = inputValue || "Anonymous";
  const displayText = inputValue === "" ? "Anonymous" : inputValue;
  nameOutput.textContent = displayText;
}

nameInput.addEventListener("input", inputHandler);
