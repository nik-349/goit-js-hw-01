
let price;
let message;
let country = prompt('Выберите страну доставки');


if (country !== null){

switch (country){
    case 'Китай':
        price = 100;
        message = `Доставка в ${country} будет стоить ${price} кредитов`;
        break;

    case 'Чили': {
        price = 250;
        message = `Доставка в ${country} будет стоить ${price} кредитов`
        break;
        }

    case 'Австралия': {
        price = 170;
        message = `Доставка в ${country} будет стоить ${price} кредитов`
        break;
        }

    case 'Индия': {
        price = 80;
        message = `Доставка в ${country} будет стоить ${price} кредитов`
        break;
        }
    
    case 'Ямайка': {
        price = 120;
        message = `Доставка в ${country} будет стоить ${price} кредитов`
        break;
        } 

    default: 
        message = 'В вашей стране доставка не доступна'

}
alert(message);
} else {
    alert('Вы отменили доставку');
}