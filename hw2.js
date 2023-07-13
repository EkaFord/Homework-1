let a = 10;
alert(a); // put 10
a = 20;
alert(a); // put 20

/*2*/
a = 2007;
alert(a); // put 2007

/*3*/
a = 'Brendan Eich'
alert(a); // put Brendan Eich

/*4*/
let b = 10;
let c = 2;

alert("Сумма: " + (b + c));
alert("Разность: " + (b - c));
alert("Произведение: " + (b * c));
alert("Частное: " + (b / c));

/*5*/
let result = Math.pow(2, 5);
alert(result);

/*6*/
let d = 9;
let e = 2
alert(d % e); //остаток от деления

/*7*/
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num++;
num--;
alert(num);

/*8*/
let age = prompt("How old are you?");
alert("Your age is: " + age);

/*9---9.2*/
let user = {
    name: "Ekaterina",
    height: 158,
    isAdmin: true
  };

/*9.4*/
let info = prompt("Какую информацию хотите узнать о пользователе?");

alert(user[info]);

/*10*/
let greeting = prompt("What is your name");
alert(`Hello, ${greeting}!`);
