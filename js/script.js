// Ссылочный тип -> object(Объект)
const objectA = {
    a: 10,
    b: true,
}

const copyOfA = objectA;

copyOfA.c = 'abc';
//console.log(objectA);

// const myCity = {
//     city: 'New York',
//     info: {
//         isPopular: true,
//         country: 'USA',
//     }
//     // popular: true,
//     // country: 'USA',
// }
// console.log(myCity.info.isPopular);
// delete myCity.info['isPopular'];
// console.log(myCity);

// myCity['popular'] = true;
// console.log(myCity);

// const countryPropertyName = 'country';
// myCity[countryPropertyName] = 'USA';
// console.log(myCity);

// delete myCity.country;
// console.log(myCity);

// console.log(myCity.city);
// console.log(myCity.popular);
// console.log(myCity.country);

const name = 'Mango';
const postsQty = 23;

const userProfile = {
    name,
    postsQty,
    hasSignedAgreement: false,
}
// console.log(userProfile);
//==============================================================================================================
//Метод - свойтво объекта, значение которого - функция
// const myCity = {
//     city: 'New York',
//     cityGreeting: function()
//     {
//         console.log('Greetings!!!');
//     }
// }
const myCity = {
    city: 'New York',
    cityGreeting()
    {
        console.log('Greetings!!!');
    }
}
// myCity.cityGreeting();
//============================================================================================================
// JSON -> JAVASCRIPT OBJECT NOTATION
// {
//     "userId": 1,
//     "id": 1,
//     "title": "Test title",
//     "status": {
//         "completed": false,
//     }
// }

// JSON.parse(); // Перевод в javascript oject
// JSON.stringify(); // Перевод з javascript oject в JSON
//================================================================================================================
// Мутирование копий
const person = {
    name: 'Bob',
    age: 25,
}

//const person2 = Object.assign({}, person); // Вариант 1

//const person2 = {...person} // Вариант 2
const person2 = JSON.parse(JSON.stringify(person)); // Вариант 3
person2.name = 'Alice';

// person2.age = 26;
// person2.isAdult = true;

// console.log(person.age);
// console.log(person2.age);

// console.log(person.name);
// console.log(person2.name);
// console.log(person.isAdult);
//==================================================================================================================
//Функции - блок кода, который можно выполнять многократно

