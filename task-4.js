let credits = (23580);
const pricePerDroid = (3000);
let totalPrice;
let limit;
let message;

const input = prompt('Желаемое количество дроидов');

if (input === null) {
    console.log('Отменено пользователем!');
}
 else if (input * pricePerDroid) {
    totalPrice = input * pricePerDroid;
    limit = credits - totalPrice;
}
if (totalPrice <= credits) {
    message = (`Вы купили ${input} дроидов, на счету осталось ${limit} кредитов.`);
    console.log(message);
    alert(message);
}
else if (totalPrice > credits) {
    message = ('Превышен лимит, приходите позже');
    console.log(message);
    alert(message);
    }