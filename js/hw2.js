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