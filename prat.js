
function solution(n){
let v = n
let j = v.toString().split('')
let sum=0
let sum1 = 0
for(i=0; i<j.length; i++){
    if(i<j.length/2){
        console.log("if",j[i]);
        sum = sum + +j[i]
        console.log(sum)
    }
    else{
        console.log("else",j[i])
        sum1=sum1 + +j[i]
        console.log(sum1)
    }
    
}
console.log(sum,sum1)
if(sum1===sum){
    console.log("RIGHT OUTPUT")
}
else{
    console.log("wrong output")
}
}
solution(2222)