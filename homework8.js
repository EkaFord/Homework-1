// ex1

const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
];

function compareByAge(personA, personB) {
    return personA.age - personB.age;
}

console.log(people.sort(compareByAge));


// ex.2

function isPositive(number) {
    return number > 0;
}

function isMale(person) {
    return person.gender === 'male';
}

function filter(array, ruleFunction) {
    return array.map(function(item) {
        if (ruleFunction(item)) {
            return item;
        }
    }).filter(Boolean);
}

console.log(filter([3, -4, 1, 9], isPositive)); 

const students = [
    {name: 'Глеб', gender: 'male'},
    {name: 'Анна', gender: 'female'},
    {name: 'Олег', gender: 'male'},
    {name: 'Оксана', gender: 'female'}
];

console.log(filter(students, isMale)); 

//ex3

let intervalCount = 0;
const interval = setInterval(() => {
  const currentDate = new Date();
  console.log(currentDate);
  intervalCount++;

  if (intervalCount === 10) {
    console.log("30 секунд прошло");
    clearInterval(interval);
  }
}, 3000);

//ex 4

function delayForSecond(callback) {
    setTimeout(callback, 1000);
  }
  
  delayForSecond(function() {
    console.log('Привет, Глеб!');
  });
  
//ex 5
function delayForSecond(cb) {
    setTimeout(() => {
        console.log('Прошла одна секунда');
        if (cb) {
            cb();
        }
    }, 1000)
}

function sayHi(name) {
    console.log(`Привет, ${name}!`);
}

delayForSecond(() => {
    sayHi('Глеб');
});
  