// let rejectOuput = new Promise(function(resolve,reject){
//     let answer = false
//     if(answer == false){
//         return resolve(10)
//     }
//     else{
//         return reject("operation fail")
//     }
// })
// rejectOuput.then((ele)=>{return ele})
// .then((value)=>{return value})
// .then((value)=>{console.log("msg",value)})



const promise1 = new Promise(function(resolve,reject){reject("PROMISE 1 GOT reject")})
const promise2 = new Promise(function(resolve,reject){
        let answer = true
        if(answer == false){
            return resolve(10)
        }
        else{
            return reject("promise 2 rejected")
        }
    })
const promise3 = new Promise(function(resolve,reject){reject("PROMISE 3 GOT rejected")})

// Promise.all([promise1, promise2, promise3])
// .then((result)=>console.log("my result is",result))
// .catch((err)=>{console.log("error came",err)})


// Promise.allSettled([promise1,promise2,promise3])
// .then((result)=>{console.log("my result is",result)})
// .catch((err)=>{console.log("error is",err)})

// Promise.any([promise2, promise3])
// .then((result)=>{console.log("promise any ka result is",result)})
// .catch((err)=>{console.log("error came from promise any",err)})

Promise.race([promise1, promise2, promise3])
.then((result)=>{console.log("promise any ka race",result)})
.catch((err)=>{console.log("error came",err)})