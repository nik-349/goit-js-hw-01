const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const input = prompt('Введите пароль');
console.log(input);

if (input === null){
    message = ('Отменено пользователем');
    console.log(message);
}
 else if (input === ADMIN_PASSWORD) {
    message = ('Добро пожаловать');
    console.log(message);
} 
 else if (input !== ADMIN_PASSWORD) {
    message = ('Доступ запрещен, неверный пароль!');
    console.log(message);
}

alert(message);