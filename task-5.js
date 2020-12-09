
let price;
let message;
let country = prompt('Выберите страну доставки');


if (country !== null){

switch (country.toLowerCase()) {
    case 'китай':
        price = 100;
        message = `Доставка в Китай будет стоить ${price} кредитов`;
        break;

    case 'чили': {
        price = 250;
        message = `Доставка в Чили будет стоить ${price} кредитов`
        break;
        }

    case 'австралия': {
        price = 170;
        message = `Доставка в Австралия будет стоить ${price} кредитов`
        break;
        }

    case 'индия': {
        price = 80;
        message = `Доставка в Индия будет стоить ${price} кредитов`
        break;
        }
    
    case 'ямайка': {
        price = 120;
        message = `Доставка в Ямайка будет стоить ${price} кредитов`
        break;
        } 

    default: 
        message = 'В вашей стране доставка не доступна'

}
alert(message);
} else {
    alert('Вы отменили доставку');
}