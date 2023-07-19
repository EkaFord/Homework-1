
/*ex 1*/

for (let i = 0; i < 2; i++) {
    console.log("Привет");
  }

/*ex 2*/

let i = 1;

while (i < 6) {
    console.log(i);
    i++;
}

/*ex 3*/

for (let i = 7; i <= 22; i++) {
    console.log(i);
  }


/*ex 4*/

const obj = {
    'Коля': '200',
    'Вася': '300',
    'Петя': '400'
  };
  
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      console.log(`${key} — зарплата ${obj[key]} долларов.`);
    }
  }

/*ex 5*/
let n = 1000;
let num = 0;

while (n >= 50) {
  n /= 2;
  num++;
}

console.log("Результат деления: " + n);
console.log("Количество итераций: " + num);


/*ex 6*/
for (let numberFriday = 4; numberFriday <=31; numberFriday += 7) {
    console.log (`Сегодня ${numberFriday}-е число. Необходимо подготовить отчет`);
}
