
const numberOfFilms = prompt('сколько фильмов вы посмотрели?','');

  
const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};     

for (let i = 0; i <2; i++){
    a = prompt('Один из последних просмотренных фильмов?', ''),
    b = prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' &&
    a.length < 50) {
        personalMovieDB.movies[a] = b; 
        console.log('done');
    } else {
        console.log('error1');
        i--;
    }
    
}
if (personalMovieDB.count < 10){
    console.log('Просмотрено довольно мало фильмов');
} else if (personalMovieDB.count >= 10 && personalMovieDB <30) {
    console.log('Вы классический зритель');
}  else if (personalMovieDB.count >= 30){
    console.log('Вы киноман');
} else {
console.log('nothing');
}
console.log(personalMovieDB);