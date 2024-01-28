// З використанням властивостей і методів DOM-елементів, напиши скрипт, який:

// Порахує й виведе в консоль кількість категорій в ul#categories, тобто елементів li.item.
// Для кожного елемента li.item у списку ul#categories знайде й виведе в консоль текст заголовка
// елемента(тегу < h2 >) і кількість елементів у категорії(усіх < li >, вкладених у нього).

const categories = document.getElementById("categories");
// console.log(categories);

const categoriesItems = categories.querySelectorAll("li.item").length;
console.log(`Number of categories : ${categoriesItems}`);
// 2
categories.querySelectorAll("li.item").forEach((category) => {
  const itemName = category.querySelector("h2").textContent;
  console.log(`Category: ${itemName}`);
  // 3
  const countEl = category.querySelectorAll("ul>li").length;
  console.log(`Elements: ${countEl}`);
});
