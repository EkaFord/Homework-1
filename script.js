
/*ex 1*/
function findMinNumber(a, b) {
    return a < b ? a : b;
  }
  
  console.log(findMinNumber(8, 4));
  console.log(findMinNumber(6, 6)); 

/*ex 2*/

function checkTheNumber(n) {
    if (n % 2 == 0) {
        return 'Число четное';
    } else {
        return 'Число нечетное';
    }
}

console.log(checkTheNumber(6));
console.log(checkTheNumber(3));

/*ex 3*/
//3.1
function printSquare(n) {
    const square = n ** 2;
    console.log(square);
}

printSquare(12);

//3.2

function getSquare(n) {
    return n ** 2;
}

const result = getSquare (13);
console.log(result);


/*ex 4*/

function askAge() {
    const age = parseInt(prompt('Сколько вам лет?'));

    if (age < 0) {
      console.log('Вы ввели неправильное значение');
    } else if (age >= 0 && age <= 12) {
      console.log('Привет, друг!');
    } else {
      console.log('Добро пожаловать!');
    }
  }

  askAge()

/*ex 5*/
function multNumber(n1, n2) {
if (isNaN(n1) || isNaN(n2)) {
    return 'Одно или оба значения не являются числом';
}
    return n1 * n2;
}

console.log(multNumber(15, 89));
console.log(multNumber('hey', 5));
console.log(multNumber(7, 'you'));

/*ex 6*/

function findCube(n) {
    if (isNaN(n)) {
        return 'Переданный параметр не является числом';
    }
    const cubedValue = n ** 3;
    return `${n} в кубе равняется ${cubedValue}`
}

for (let i = 0; i <= 10; i++) {
    console.log(findCube(i));
  }

/*console.log(findCube(0));
console.log(findCube(1));
console.log(findCube(2));
console.log(findCube(3));
console.log(findCube(4));
console.log(findCube(5));
console.log(findCube(6));
console.log(findCube(7));
console.log(findCube(8));
console.log(findCube(9));
console.log(findCube(10));
console.log(findCube('test'));*/

/*ex 6*/

const circle1 = {
    radius: 5,
  
    getArea: function () {
      return Math.PI * this.radius * this.radius;
    },
  
    getPerimeter: function () {
      return 2 * Math.PI * this.radius;
    }
  };
  

  const circle2 = {
    radius: 7,
  
    getArea: function () {
      return Math.PI * this.radius * this.radius;
    },
  
    getPerimeter: function () {
      return 2 * Math.PI * this.radius;
    }
  };
  

  console.log(circle1.getArea()); 
  console.log(circle1.getPerimeter());
  
  console.log(circle2.getArea());
  console.log(circle2.getPerimeter()); 

  //ex.8

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

const button = document.getElementById("seasonButton");
button.addEventListener("click", buttonClick);