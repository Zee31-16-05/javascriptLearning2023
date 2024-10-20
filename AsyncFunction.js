
console.log("i am 1");
console.log("i am 2");
console.log("i am 3");

// setTimeout(function(name,age,rollno){console.log(`i am ${name} and ${age} and ${rollno}`)},0,"godsul",20,33)
// console.log("log 5");

// setImmediate(function(name,age,rollno){console.log(`nameeeee ${name} and ${age} and ${rollno}`)},"godsul",23,44)

const result = setInterval(function(team,country){console.log(`team is ${team} and ${country}`)},2000,"kkr","india")

console.log("helloooooooooooooooo");
console.log("worlddddddddddddddd");

// result()



setTimeout(function(){
    clearInterval(result);
},9000)

// Function to be executed every interval
function repeatFunction() {
    console.log('Function executed at interval');
}

// Start setInterval() and store the interval ID
const intervalId = setInterval(repeatFunction, 1000); // Executes every 1000ms (1 second)

// Stop the interval after 5 seconds
setTimeout(() => {
    clearInterval(intervalId); // Stop the repeated execution
    console.log('Interval stopped');
}, 5000); // After 5000ms (5 seconds)
