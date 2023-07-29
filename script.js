  function getSeason(monthNumber) {
    if (typeof monthNumber !== 'number' || monthNumber < 1 || monthNumber > 12) {
        return "Ошибка: введите номер месяца от 1 до 12.";
    } else if (monthNumber === 12 || monthNumber === 1 || monthNumber === 2) {
        return "Зима";
    } else if (monthNumber === 3 || monthNumber === 4 || monthNumber === 5) {
        return "Весна";
    } else if (monthNumber === 6 || monthNumber === 7 || monthNumber === 8) {
        return "Лето";
    } else {
        return "Осень";
    }
}

function buttonClick() {
    
    const userInput = prompt("Введите номер месяца (от 1 до 12):");
    const monthNumber = parseInt(userInput, 10);

    const season = getSeason(monthNumber);
    console.log(season);
}

const button = document.getElementById("seasonsButton");
button.addEventListener("click", buttonClick);





//Задание 1 Преобразуйте строку js в верхний регистр JS.

console.log('js'.toUpperCase());

//2

function searchStart(arr, searchString) {
  const lowerSearchString = searchString.toLowerCase();
  return arr.filter((item) => item.toLowerCase().startsWith(lowerSearchString));
}

console.log(searchStart(['Кошка', 'Кит', 'Комар', 'Носорог'], 'ко'));
console.log(searchStart(['яблоко', 'груша', 'гриб', 'огурец'], 'гру'));
console.log(searchStart(['Дом', 'Банк', 'Больница', 'Театр'], 'Кино'));


//3 Округлите число 32.58884: До меньшего целого, До большего целого, До ближайшего целого

const number = 32.58884;
const roundedDown = Math.floor(number);
const roundUp = Math.round(number);
const roundClose = Math.ceil(number);

console.log(roundedDown);
console.log(roundUp);
console.log(roundClose);

//Задание 4 Даны числа 52, 53, 49, 77, 21, 32.
//Необходимо найти среди этих чисел наименьшее и наибольшее числа и 
//вывести их в консоль.

const numbers = [52, 53, 49, 77, 21, 32];
const minNumber = Math.min(...numbers);
const maxNumber = Math.max(...numbers);

console.log('Наименьшее число:', minNumber);
console.log('Наибольшее число:', maxNumber);

//Задание 5 Создайте функцию, которая будет выводить в консоль рандомное число от 1 до 10.

function getRandomInt(minValue, maxValue) {
  return Math.round (Math.random()*(maxValue-minValue));
}
console.log(getRandomInt(1,10));

//Задание 6

function getRandomArrNumbers(num) {
  const arrLength = Math.floor(num / 2);
  const result = [];

  for (let i = 0; i < arrLength; i++) {
    const randomNum = Math.floor(Math.random() * (num + 1));
    result.push(randomNum);
  }

  return result;
}

console.log(getRandomArrNumbers(7));
console.log(getRandomArrNumbers(12));

//Задание 7

function getRandomInt(minValue, maxValue) {
  return Math.round(Math.random() * (maxValue - minValue)) + minValue;
}

console.log(getRandomInt(8,15));

//Задание 8

//let currentDate = new Date();
//console.log(currentDate);

let myDate = new Date();
console.log(+myDate);
let days15 = 15 * 24 * 60 * 60 * 1000;
let searchDate = myDate - days15;
let daysAgo15 = new Date(searchDate);
console.log(daysAgo15);

//Задание 9 Создайте переменную currentDate и сохраните в нее текущую дату.
//Выведите дату, которая наступит через 73 дня после текущей.
//Решить эту задачу вам помогут 2 метода даты: getDate()
//и setDate(), один из методов должен быть передан в качестве параметра второму.

const currentDate = new Date();
const futureDate = new Date(currentDate);
futureDate.setDate(currentDate.getDate() + 73);
console.log('In 73 days there will be:', futureDate);

//exercise 10 //Hаписать функцию, которая на вход принимает дату, 
//а возвращает ее отображение в виде:
//Дата: <число> <месяц на русском> <год> - это <день недели на русском>.
//Время: <часы>:<минуты>:<секунды>
//Время, которое будет выведено, также хранится в объекте Date.

function formatDateInRussian(date) {
  const optionsDate = { day: 'numeric', month: 'long', year: 'numeric', weekday: 'long' };
  const optionsTime = { hour: '2-digit', minute: '2-digit', second: '2-digit' };

  const formattedDate = date.toLocaleString('ru-RU', optionsDate);
  const formattedTime = date.toLocaleString('ru-RU', optionsTime);

  return `Дата: ${formattedDate} - это ${formattedDate.slice(0, formattedDate.indexOf(','))}.\nВремя: ${formattedTime}`;
}

const currentNewDate = new Date();
const formattedDateTime = formatDateInRussian(currentNewDate);
console.log(formattedDateTime);