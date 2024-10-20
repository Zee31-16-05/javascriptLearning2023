// const result = new Promise()
const result = new Promise(function(resolve,reject){
    if(result){
     return   resolve()
        // return result
    }
    else{
       return reject()
        // return result
    }
}).then(resolve).catch(reject)

// result.then()
// result.catch()

// result.then().catch()

// example 1.

const output = new Promise(function(resolve,reject){
    setTimeout(()=>{
        // let value = console.log("my output is promise")
        return resolve(console.log("my output is promise"));
    },0)
})
console.log("log 34");

output.then((ele)=>{console.log(ele)})

// let rejectOuput = new Promise(function(resolve,reject){})
let rejectOuput = new Promise(function(resolve,reject){
    let answer = false
    if(answer == false){
        return resolve("operation pass")
    }
})

rejectOuput.then((message)=>{console.log(message)}).catch((err)=>{console.log(err)})

// console.log("1");
// console.log("2");
setTimeout(()=>{console.log("messiahhh")},0)
setImmediate(()=>{console.log("setImmediate - messiahhh")})
// console.log("3");
// console.log("4");


