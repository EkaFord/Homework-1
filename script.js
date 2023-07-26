//Задание 1

const array = [1, 5, 4, 10, 0, 3];

let i = 0;

while (i < array.leight) {
  if (i === 10) {
    break
  }
  console.log(array[i]);
  i++
}


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

