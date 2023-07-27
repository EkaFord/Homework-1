//Задание 1

/*const array = [1, 5, 4, 10, 0, 3];

let i = 0;

while (i < array.leight) {
  if (i === 10) {
    break
  }
  console.log(array[i]);
  i++
}*/


//Задание 2

let products = [1, 5, 4, 0, 3];

console.log(products.indexOf(4));

//Задание 3

let items = [1, 3, 5, 10, 20];
console.log(items.join(' '));

//Задание 4
//С помощью вложенных циклов создайте многомерный массив вида: 
//[[1, 1, 1], [1, 1, 1], [1, 1, 1]]

const rows = 3; 
const cols = 3; 

const multiArray = [];

for (let i = 0; i < rows; i++) {

  const innerArray = [];
   
  for (let j = 0; j < cols; j++) {
    innerArray.push(1);
  }
  
  multiArray.push(innerArray);
}

console.log(multiArray);

  
//Задание 5
//Дан массив: 
//[1, 1, 1] Добавьте в конец массива значения 2, 2, 2.

let elements = [1, 1, 1];
elements.push (2, 2, 2);
console.log(elements);

//Задание 6
//Дан массив: [9, 8, 7, 'a', 6, 5]
//С помощью метода sort отсортируйте массив и удалите букву 'a' 
//из данного массива. В результате работы программы вывести массив, 
//состоящий из цифр.

/*const array = [9, 8, 7, 'a', 6, 5];

array.sort((a, b) => a - b);

const resultArray = array.filter(item => typeof item === 'number');

console.log(resultArray);*/

//Задание 7
//Дан массив: [9, 8, 7, 6, 5]
//Попросить пользователя угадать число (использовать prompt). 
//Если значение, которое ввёл пользователь, есть в массиве, вывести в alert «Угадал», 
// противном случае вывести «Не угадал».

/*const array = [9, 8, 7, 6, 5];

const randomIndex = Math.floor(Math.random() * array.length);
const numberToGuess = array[randomIndex];

const userInput = prompt('Угадайте число из массива: ');

if (Number(userInput) === numberToGuess) {
  alert('Угадал');
} else {
  alert('Не угадал ' + numberToGuess + '.');
} */

//Задание 8
//Дана строка: 'abcdef'
//Необходимо, чтобы программа вывела в консоль 'fedcba'

function reverseString(str) {
  let reversedString = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversedString += str[i];
  }
  return reversedString;
}

const originalString = 'abcdef';
const reversedString = reverseString(originalString);
console.log(reversedString);

//9 Дан массив: [[1, 2, 3,],[4, 5, 6]] Выведите в консоль массив вида [1, 2, 3, 4, 5, 6]

const nestedArray = [[1, 2, 3], [4, 5, 6]];
const flattenedArray = [].concat(...nestedArray);

console.log(flattenedArray);

// 10 Создайте массив с произвольными числами (диапазон от 1 до 10). 
//Переберите его с помощью цикла for
//и в каждой итерации выведите в консоль сумму текущего и 
//следующего элементов массива.

//Следующий элемент массива можно получить с помощью индекса: i + 1
//Обратите внимание, что у последнего элемента нет следующего.


const array = [];
for (let i = 0; i < 10; i++) {
  array.push(Math.floor(Math.random() * 10) + 1);
}

console.log("Массив:", array);

for (let i = 0; i < array.length - 1; i++) {
  const currentElement = array[i];
  const nextElement = array[i + 1];
  const sum = currentElement + nextElement;
  console.log(`Сумма ${currentElement} и ${nextElement} равна ${sum}`);
}

//Задание 11 Создайте функцию, которая принимает на вход массив целых чисел, 
//а возвращает массив квадратов этих чисел.

/*const salary = [12, 14, 16];
const result = salary.map(item => (item ** 2));
console.log(result);*/

//Задание 12 Создайте функцию, которая принимает на вход массив строк, 
//а возвращает массив длины слов.

function getLengthWords(arr) {
  const lengths = arr.map(word => word.length);
  return lengths;
}

const result = getLengthWords(['слово', '', 'слог', 'длинное предложение', 'буква']);
console.log(result); 

//13

function filterPositive(array) {
  const negativeValues = array.filter(num => num < 0);
  return negativeValues;
}

console.log(filterPositive([-1, 0, 5, -10, 56])); 
console.log(filterPositive([-25, 25, 0, -1000, -2])); 
