const arrValue = ['My', 'name', 'is', 'Jack'];

console.log(arrValue);   // ["My", "name", "is", "Jack"]
console.log(...arrValue); // My name is Jack // so you can see it opens up the array and give you directly the element...

//add element to array using spread..

const zee = ['khan','zeehsan',18]

const add = [...arrValue,...zee, "messiLionel"]

console.log("ad....",add);

add.push("push")
console.log("addPush....",add);

// add.append("append")        //append kar k koi function nai h.... push hai.

console.log("append.....",add)      //error aaya...


//spread operator with object
let zee1 = {
    "name" : "zeeshan",
    "sirname" : "khan"
}

let sirname = {
    "barca" : "messi",
    "madrid" : "ronaldo"
}

let add2 = {...zee1, ...sirname}

// add2.push()

console.log("add2.....",add2);

function sum(...num1) {
    // console.log(x,y,z,v)
    // console.log(x + y + z + v)
    console.log(...num1);
}

const num1 = [1, 3, 4, 5];

sum(...num1); // 8

//OBJCET ko iterate kaise karne ka....

// Instead you have to use Object.keys or Object.entries, to iterate over the properties or entries of an object.

let objj = {
    "name" : "zeeshan",
    "sirname" : "khan",
    "age" : 33
}

for(let iterate of Object.keys(objj)){

    const capital = iterate
    console.log("capitalllll...",capital)
}
