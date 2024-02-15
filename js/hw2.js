const minVal = 2.0;
const maxVal = 10.0;
const randomVal = Math.random() * (maxVal - minVal) + minVal;
console.log(randomVal);

const minNum = 2;
const maxNum = 11;
const randomNum = Math.random() * (maxNum - minNum) + minNum;
console.log(randomNum.toFixed());

const firstNum = parseInt(prompt('Введіть перше число, яке хочете додати', ''));
const secondNum = parseInt(prompt('Введіть друге число, яке хочете додати', ''));
const suma = firstNum + secondNum;
const answer = alert('Сума цих чисел дорівнює: ' + suma);

const celsius = 27;
const fahrenheit = 25 * 9/5 + 32;
console.log(fahrenheit);

const days = 29;
const hours = 29 * 24;
const minutes = hours * 60;
console.log(hours);
console.log(minutes);

let health = 100;
let energy = 100;
health = health - 27;
energy = energy - 30;
console.log(health);
console.log(energy);

const tshirt = 500;
const jeans = 400;
let basket = tshirt + jeans;
sale = basket * 0.1;
basket = basket - sale;
console.log(basket);

const floatNum = 5.95;
console.log(Math.floor(floatNum));

const string = '8.98';
console.log(parseFloat(string));

const str = '8';
console.log(parseInt(str));

const root = 4;
console.log(Math.sqrt(root));

const num = 7;
const strNum = '7';
console.log(num.toString());
console.log(parseInt(strNum));

// let a = 1, b = 1;
// let c = ++a;
// let d = b++;
// a = 2, b = 2, c = 2, d = 1

// let a = 2;
// let x = 1 + (a *= 2);
// a = 4, x = 5

// "" + 1 + 0; // '10'
// "" - 1 + 0; // -1
// true + false; // 1
// 6 / "3" // 2
// "2" * "3" // 6
// 4 + 5 + "px" // '9px'
// "$" + 4 + 5 // '$45'
// "4" - 2 // 2
// "4px" - 2 // NaN
// "  -9  " + 5 // '  -9  5'
// "  -9  " - 5  // -14
// null + 1  // 1
// undefined + 1 // NaN
// " \t \n" - 2 // -2