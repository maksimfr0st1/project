// 'use strict'
// // 2.12 
// // // alert('Hello world!')

// // // const result = confirm('Are you here?');
// // // console.log(result);

// // // const answer = prompt('Вам есть 18?', '18');
// // // console.log(typeof(answer))

// // const answers = [];

// // // answers[0] = prompt('Как ваше имя?', '');
// // // answers[1] = prompt('Как ваше фамилия?', '');
// // // answers[2] = prompt('Сколько вам лет?', '');

// // console.log(typeof(answers));
// console.log(typeof(null));

// // ////////////////////////////////////////////////////

// // 2.13

// const category = 'toys';

// // console.log(`https://someurl.com/${category}/5`);

// // const user = 'Maxim';

// // alert(`Привет, ${user}`);

// // //////////////////////////////

// // 2.14

// let incr = 10,
//     decr = 10;

// // incr++;
// // decr--;

// console.log(++incr);
// console.log(--decr);

// console.log(5%2);

// console.log(4*2 === 8);

// const isChecked = true,
//         isClosed = false;

// console.log(isChecked || isClosed);

// console.log(5);

// //////ЗАДАЧА 2.19   

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actores: {},
    genres: [],
    privat: false
};

const a = prompt('Один из последних просмотренных фильмов?',''),
    b = prompt('На сколько оцените его?',''),
    c = prompt('Один из последних просмотренных фильмов?',''),
    d = prompt('На сколько оцените его?','');


personalMovieDB[a] = b;
personalMovieDB[c] = c;

 console.log(personalMovieDB);