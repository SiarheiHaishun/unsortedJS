
// Возведение в степень
// console.log(Math.pow(2,2));//4
// console.log(Math.pow(2,3));//8
// console.log(Math.pow(2,4));//16

function pow(x,n){
    let result = 1;

    for(let i = 0; i < n; i++){
        result *=x;

    }
   return result;
}
// Рекурсия
function pow(x,n){
    if (n===1){
        return x;
    } else{
        return x * pow(x, n-1);
    }
}
// n===1 база рекурсии
// n - 1  шаг рекурсии
// n глубина рекурсии

pow(2,2)
pow(2,3)
pow(2,4)

let students = {
    js:[{
        name: 'John',
        progress:100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress:20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [ {
            name: 'Sam',
            progress: 10
        }]
    }
};
function getTotalProgressByIteration(data) {
    let total = 0;
    let students = 0;

    for (let course of Object.values(data)){
        if (Array.isArray(course)){
            students += course.length;

            for (let i = 0; i < course.length; i++){
                total +=course[i].progress;
            }
        } else {
            for (let subCourse of Object.values(course)){
                students += subCourse.length;

                for (let i = 0; i < subCourse.length; i++){
                    total += subCourse[i].progress; 
                }
            }
        }
    }


    return total / students;
}



console.log(getTotalProgressByIteration(students));

function getTotalProgressByRecurtion(data){
 //База рекурсии - проверка на массив
 if (Array.isArray(data)){
    let total = 0;

    for (let i = 0; i < data.length; i++){
        total +=data[i].progress;
    }
    return [total, data.length];
} else {
    let total = [0,0];

    for (let subData of Object.values(data)) {
        const subDataArr = getTotalProgressByRecurtion(subData);
        total[0] += subDataArr[0];
        total[1] += subDataArr[1];


    }
    return total;
}
};

const result = getTotalProgressByRecurtion(students);

console.log(result[0]/result[1]);


let students_2 = {
    js:[{
        name: 'John',
        progress:100
    }, {
        name: 'Ivan',
        progress: 60
    }],
    html: {
        basic: [{
            name: 'Peter',
            progress:20
        }, {
            name: 'Ann',
            progress: 18
        }],
        pro: [ {
            name: 'Sam',
            progress: 10
        }],

        semi: {
            students: [{
                name: 'Test',
                progress: 100
            }]
        }
    }
};
const result_2 = getTotalProgressByRecurtion(students_2);

console.log(result_2[0]/result_2[1]);
