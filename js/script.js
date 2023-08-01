'use strict'
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

// const name = 'Mango';
const postsQty = 23;

// const userProfile = {
//     name,
//     postsQty,
//     hasSignedAgreement: false,
// }
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

// let a = 5;
// let b = 3;

// функция - это Объект
function sum(a, b)
{
    const c = a + b;
    // console.log(c);
}
// sum(a, b);
// console.dir(sum);

const personOne = {
    name: 'Bob',
    age: 21,
}

function increasePersonAge(person)
{
    const updatePerson = Object.assign({}, person)
    updatePerson.age += 1;
    return updatePerson;
}
const updatePersonOne = increasePersonAge(personOne);
// console.log(personOne.age);
// console.log(updatePersonOne.age);

// Колбэк Функции
function printMyName()
{
    // console.log('Mango');
}

setTimeout(printMyName, 1000);
//===============================================================================================
// Области Видимости
// const a = 5;

function myFn()
{
    function innerFn()
    {
        // console.log(a);
    }
    innerFn();
}
myFn();
//===================================================================================================
// Операторы - это встроенная функция
// a + b * c / d - e

// a + ((b * c) / (d - e))

// (((a + b) * c) / d) - e 

// ! НЕ
// && И
// || ИЛИ

// const button = {
//     width: 200,
//     text: 'Buy'
// }

// const redButton = {
//     ...button,
//     color: 'red'
// }

// console.table(redButton);

const buttonInfo = {
    text: 'Buy'
}

const buttonStyle = {
    color: 'yellow',
    width: 200,
    height: 300
}

const button = {
    ...buttonInfo,
    ...buttonStyle
}

// console.table(button);

//============================================================================================================
// Конкатинация строк
// const hello = 'Hello';
// const world = 'World';

// const greeting = hello + ' ' + world;
// console.log(greeting);

// Шаблонные строки
const hello = 'Hello';
const world = 'World';

const greeting = `${hello} ${world}`;
// console.log(greeting);
//======================================================================================================
// Функциональные выражения
const myFunction = function(a, b)
{
    let c;
    a = a + 1;
    c = a + b;
    return c;
}
// console.log(myFunction(5, 3));
//===========================================================================================================
// Стрелочные функции
const Function = (a, b) => {
    let c;
    a = a + 1;
    c = a + b;
    return c;
}
// console.log(Function(5, 3));

const newPost = (post, addedAt = Date()) => ({
    ...post,
    addedAt,
})

const firstPost = {
    id: 1,
    author: 'Mango',
}

// console.log(newPost(firstPost));
//=================================================================================================================
// Обработка Ошибок
const fnWithError = () => {
    throw new Error('Some error');
}

try 
{
    fnWithError();
} 
catch (error) 
{
    // console.error(error);
    // console.log(error.message);
}
// console.log('Continue...');
//=================================================================================================================
// Инструкция
let a;
const b = 5;

if(a > b)
{
    // console.log('a is larger');
}

for(let i = 0; i < 5; i++)
{
    // console.log(i);
}
//====================================================================================================================
// Массив - это объект с цифровыми именами свойств
// const myArray = [1, 2, 3];
// myArray.push(4); // Добавление елемента в конец массива
// myArray.pop(); // Удаляет последний елемент з конца массива
// myArray.unshift(true); // Добавление елемента в начало массива
// myArray.shift(); // Удаление первого елемента в массиве
// myArray.forEach(el => console.log(el * 2)); // Перебор массива
// const newArray = myArray.map(el => el * 3); // Возрат нового массива
// const newArray = myArray.map(function(el)
// {
//     return el * 3;
// }) // Возрат нового массива
// console.log(newArray);
// console.log(myArray);

// const removedElement = myArray.pop(); // Возращение удаленого едемента
// console.log(removedElement);


// const myArray2 = new Array(1, 2, 3);
// const removedElement2 = myArray2.shift(); // Возращение удаленого едемента
// console.log(removedElement2);
// console.log(myArray2);
//============================================================================================================
// Деструктуризация
const userProfile = {
    name: 'Mango',
    commentsQty: 23,
    hasSignedAgreement: false,
}

const userInfo =  ({name, commentsQty}) => {
    if(!commentsQty)
    {
        return `User ${name} has no comments`;
    }
    return `User ${name} has ${commentsQty} comments`;
}

// console.log(userInfo(userProfile));

//----------------------------------------------------------------------
const fruits = ['Apple', 'Banana'];

const [fruitOne, fruitTwo] = fruits;
// console.log(fruitOne);
// console.log(fruitTwo);
//================================================================================================================
// Условные инструкции
const sumPositiveNumbers = (a, b) => {
    if(typeof a !== 'number' || typeof b !== 'number')
    {
        return 'One of the arguments is not a number';
    }

    if(a <= 0 || b <= 0)
    {
        return 'Numbers are not positive';
    }
    return a + b;
}
// console.log(sumPositiveNumbers(6, 9));
//------------------------------------------------------------------------------------------------
const month = 0;
switch(month)
{
    case 12:
        console.log('Декабрь');
        break;
    case 1:
        console.log('Январь');
        break;
    case 2:
        console.log('Февраль');
        break;
    default:
        // console.log('Это не зимний месяц');
}
//====================================================================================================
// Тернарный Оператор
let value = 11;
// console.log(value >= 0 ? value : -value);

value = -5;
const res = value >= 0 ? value : -value;
// console.log(res);
//=======================================================================================================
// Циклы
// const myArray = ['first', 'second', 'third'];
// myArray.forEach(element => {
//     // console.log(element);
// })
// console.log('----------------------------');
// for(let i = 0; i < myArray.length; i++)
// {
//     // console.log(myArray[i]);
// }
// // console.log('------------------------------');
// for(const key in myArray)
// {
//     // console.log(myArray[key]);
// }
// // console.log('-------------------------------');
// for(const element of myArray)
// {
//     // console.log(element);
// }
//===========================================================================================================
// Классы - позволяют создавать прототипы для объектов
class Comment {
    constructor(text)
    {
        this.text = text;
        this.votesQty = 0;
    }
    upvote()
    {
        this.votesQty += 1;
    }

    static mergeComments(first, second)
    {
        return `${first} ${second}`;
    }
}

Comment.mergeComments('First comment.', 'Second comment.');

const firtsComment = new Comment('First comment');

firtsComment instanceof Comment;
firtsComment instanceof Object;

firtsComment.upvote();
// console.log(firtsComment.votesQty);
//-----------------------------------------------------------------------------------
class NumbersArray extends Array {
    sum()
    {
        return this.reduce((el, acc) => acc += el, 0);
    }
}

const myArray = new NumbersArray(2, 5, 7);
// console.log(myArray);
myArray.sum();
//====================================================================================================
// Промис - это обещание предоставить результат позже
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//     .then(response => response.json())
//     .then(json => console.log(json))
//     .catch(error => console.error(error));

// const getData = (url) => new Promise((resolve, reject) =>
//     fetch(url)
//         .then(response => response.json())
//         .then(json => resolve(json))
//         .catch(error => reject(error))
// );

// getData('https://jsonplaceholder.typicode.com/todos/1')
//     .then(data => console.log(data))
//     .catch(error => console.log(error.message));
//=======================================================================================================
// ASYNC/AWAIT - это специальный синтаксис для упрощения работы с промисами
// const asyncFn = async () => {
//     throw new Error('There was an error!');
//     // return 'Success!';
// }

// asyncFn()
//     .then(value => console.log(value))
//     .catch(error => console.log(error.message));
//----------------------------------------------------------------------------------------------------
// const timerPromise = () => new Promise((resolve, reject) => setTimeout(() => resolve(), 2000));
// const asyncFn = async () => {
//     console.log('Timer starts');
//     const startTime = performance.now();
//     await timerPromise();
//     const endTime = performance.now();
//     console.log('Timer ended', endTime - startTime);
// }
// asyncFn();
//----------------------------------------------------------------------------------------------------------
const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();
    return json;
}

getData('https://jsonplaceholder.typicode.com/todos/1')
    .then(data => console.log(data))
    .catch(error => console.log(error.message));