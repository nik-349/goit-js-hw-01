let price;

const country = prompt('Укажите страну доставки.');
switch (country.toLowerCase()) {
 case 'китай':
    price = 100;
    break;

 case 'чили':
    price = 250;
    break;

 case 'австралия':
    price = 170;
    break;
    
 case 'индия':
    price = 80;
    break;

 case 'ямайка':
    price = 120;
    break;

    default:
        alert('В вашей стране доставка не доступна');
}
if (price !== undefined) {
    console.log(`Доставка в ${country} будет стоить ${price} кредитов`);
    alert(`Доставка в ${country} будет стоить ${price} кредитов`);
}

