const age = 13;

console.log(age);

const name = "Максим"

console.log(name);

const isStudent = true;

if (isStudent) {
    console.log("Ця особа є студентом.");
} 
else {
    console.log("Ця особа не є студентом.");
}

const myString = "Коли все, здається, йде проти вас, пам’ятайте, що літак злітає проти вітру, а не з ним. Генрі Форд";

console.log(myString);

let myNumber = 5;

myNumber = 10;

console.log(myNumber);

const myNull = null;

console.log(myNull);

const userName = prompt("Будь ласка, введіть своє ім'я: ");

if (userName !== null & userName !== "") {
    alert("Привіт," + userName + "!");
} 
else {
    alert("Ви не ввели своє ім'я!");
}

const question = confirm("Ви впевнені що хочете підтвердити цю дію?");
if (question){
    alert("Дякую за підтвердження!");
}
else{
    alert("Дію відмінено!");
}

alert("Ця дія є небезпечна тому просимо Вас підтвердити дію");

const confirmation = confirm('Ви бажаєте підтвердити цю дію?');

if (confirmation){
    alert("Дякую за підтвердження!");
}
else{
    alert("Дію відмінено!");
}