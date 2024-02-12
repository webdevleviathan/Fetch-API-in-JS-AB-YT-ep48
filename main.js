/*
function log(){
    console.log('Task-ul este gata!');
}
function task(callback){
    for(let i=0; i<10; i++){
        console.log(i);
    }
    callback();
}
task(log);




let arr = [-1, 2, 3, 4, 5];

function numerePare(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            res.push(arr[i]);
        }
    }
    return res;
}
function numereInpare(arr){
    let res = [];
    for(let i=0; i<arr.length; i++){
        if(Math.abs(arr[i] % 2) ==1){
            res.push(arr[i]);
        }
    }
    return res;
}
function filtreaza(arr, callback){
    let res = [];
    for (let i=0; i<arr.length; i++){
        if(callback(arr[i])){
            res.push(arr[i]);
        }
    }
    return res;
}
function pare(nr){
    return nr % 2 == 0;
}

let res = filtreaza(arr, (n) => Math.abs(n % 2) ==1);
console.log(res);



let arr = [-1, 2, 3, 4, 5];
function contineNumerePare(arr){
    for(let i=0; i<arr.length; i++){
        if(arr[i]%2==0){
            return true;
        }
    }
    return false;
}
function oricare(arr, callback){
    for(let i=0; i<arr.length; i++){
  if(callback(arr[i])){
    return true;
} 
}
return false;
}

let res = oricare(arr, (n) => n < 0);
console.log(res);



function task1() {
    let startDate = new Date();
    let endDate = new Date(startDate.getTime() + 3000);

    while (new Date() <= endDate) {}

    console.log('task gata!');
}

function task2() {
    console.log('task2 gata!');
}
console.log(1);
console.log(2);

setTimeout(() => {
    console.log('task2 gata!');  
}, 3000);
console.log(3);
console.log(4);
task2();



// 1.XMLHttpRequest
const getPosts = function(id, callback) {
    const request = new XMLHttpRequest();
    request.addEventListener('load', (e) => {
        if (request.status === 200) {
            callback(null, request.responseText);
        } else {
            callback(`Error ${request.status}`);
        }
    });
    request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}/posts`);
    request.send();
}
// getPosts(1,(err, res) => {
//     if (err) {
//         console.log(err);
//     } else {
//         console.log(res);
//         getPosts(2, (e,r)=>{
//             console.log(r);
//         })
//     }

// });


// 2.fetch API
// 3.librarie externa
// 4.JQuery

*/

// const getPosts = function(id, callback) {
//     const request = new XMLHttpRequest();
//     request.addEventListener('load', (e) => {
//         if (request.status === 200) {
//             callback(null, request.responseText);
//         } else {
//             callback(`Error ${request.status}`);
//         }
//     });
//     request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}/posts`);
//     request.send();
// };

// const getPosts = function(id) {
//     return new Promise((resolve, reject) => {
//         const request = new XMLHttpRequest();
//         request.addEventListener('load', (e) => {
//             if (request.status === 200) {
//                 resolve(request.responseText);
//             } else {
//                 reject(`Error ${request.status}`);
//             }
//         });
//         request.open('GET', `https://jsonplaceholder.typicode.com/users/${id}/posts`);
//         request.send();
//     });
// };

// let a = 1;

// let p = new Promise(function(resolve, reject) {
//     if (a < 5) {
//         resolve("am apelat resolve()");
//     } else {
//         reject("am apelat reject()");
//     }
// });

// p.then((res) => {
//     console.log(`promisiunea este indeplinita ${res}`);
// }).catch((err) => {
//     console.log(`promisiunea este incalcata ${err}`);
// });

// let res = Promise.all([getPosts(1), getPosts(2)]).then(arr=>{
//     console.log(...arr);
//     return getPosts(3);
// }).then(post =>{
//     console.log(posts);
// })

// getPosts(1)
//     .then((posts) => {
//         console.log("promisiunea 1:", posts);
//         return getPosts(2);
//     })
//     .then((posts) => {
//         console.log("promisiunea 2:", posts);
//     })
//     .then((posts) => {
//         console.log("promisiunea 3:", posts);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



// p.then((res) => {
//     console.log(`promisiunea este indeplinita ${res}`);
// }).catch((err) => {
//     console.log(`promisiunea este incalcata ${err}`);
// });


// 2.fetch API

fetch('https://jsonplaceholder.typicode.com/users/1/posts').then(res=>{ //1
    console.log('Succes', res);
    return res.json();        //2
}).then(posts=>{
    console.log(posts);
}).catch(err=>{       //3
    console.log(err);
});

