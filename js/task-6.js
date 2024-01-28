// Напиши скрипт створення й очищення колекції елементів з наступним функціоналом.
// Є input, у який користувач вводить бажану кількість елементів.Після натискання на
// кнопку Create має рендеритися(додаватися в DOM) колекція з відповідною кількістю
// елементів і очищатися значення в інпуті.При повторному натисканні на кнопку Create
// поверх старої колекції має рендеритись нова.Після натискання на кнопку Destroy
// колекція елементів має очищатися.

// Після натискання користувачем на кнопку Create треба провалідувати значення в input,
// воно має бути в межах від 1 до 100 включно.Тільки якщо воно задоволяє умову, мають
// додаватися нові < div > елементи в DOM.

// Для рендеру елементів на сторінці створи функцію createBoxes(amount), яка приймає
// один параметр — число, що зберігає кількість елементів для рендеру.Функція має
// створювати стільки < div > елементів, скільки
// вказано в параметрі amount і додавати їх у DOM дочірніми елементами для div#boxes.

// Розміри першого <div> елемента мають бути 30px на 30px.
// Кожен наступний елемент повинен бути ширшим і вищим від попереднього на 10px.
// Усі елементи повинні мати випадковий колір фону.Використовуй готову функцію
// getRandomHexColor() для отримання випадкового кольору.

// Для очищення колекції після натискання на кнопку Destroy створи функцію destroyBoxes(),
//   яка очищає вміст div#boxes, у такий спосіб видаляючи всі створені елементи.

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, "0")}`;
}

const createBtn = document.querySelector("[data-create]");
const destroyBtn = document.querySelector("[data-destroy]");
const boxesContainer = document.getElementById("boxes");
const boxCountInput = document.querySelector("#controls input");

createBtn.addEventListener("click", function () {
  const amount = boxCountInput.value;

  if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    boxCountInput.value = "";
  } else {
    alert("Please enter a number between 1 and 100.");
  }
});

destroyBtn.addEventListener("click", destroyBoxes);

function createBoxes(amount) {
  boxesContainer.innerHTML = "";

  for (let i = 0; i < amount; i++) {
    const box = document.createElement("div");
    // box.className = "box";
    box.style.width = `${30 + i * 10}px`;
    box.style.height = `${30 + i * 10}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
  }
}

function destroyBoxes() {
  boxesContainer.innerHTML = "";
}
