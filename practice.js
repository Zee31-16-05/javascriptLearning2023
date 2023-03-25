const hero1 = {
    name: 'Batman',
    address: {
      city: 'Gotham'
    }
  };

  const hero2 = {
    name: 'Batman',
    address: {
      city: 'Gotham'
    }
  };
// console.log(Object.keys(obj2).length);
// if(obj1 === obj2){
//     console.log("yess");
// }
// else{
//     console.log("no");
// }

// function shallowEqual(object1, object2) {
//     const keys1 = Object.keys(object1);
//     console.log(keys1)
//     const keys2 = Object.keys(object2);
//     console.log(keys2)
//     if (keys1.length !== keys2.length) {
//         // console.log("jii")
//       return false;
//     }
//     for (let key of keys1) {
//         console.log(key)
//       if (object1[key] !== object2[key]) {
//         return false;
//       }
//     }
//     return true;
//   }

// console.log(shallowEqual(obj1,obj2))

function deepEqual(object1, object2) {
    const keys1 = Object.keys(object1);
    console.log("1",keys1)
    const keys2 = Object.keys(object2);
    console.log("2",keys2)
    if (keys1.length !== keys2.length) {
      return false;
    }
    for (const key of keys1) {
      const val1 = object1[key];
      console.log('val1',val1);
      const val2 = object2[key];
      console.log('val2',val2);

      const areObjects = isObject(val1) && isObject(val2);
      console.log('fun',areObjects)
      if (
        areObjects && !deepEqual(val1, val2) ||
        !areObjects && val1 !== val2
      ) {
          console.log('aaya')
        return false;
      }
    }
    return true;
  }
  deepEqual(hero1,hero2)
  function isObject(object) {
    return object != null && typeof object === 'object';
  }
//   console.log(deepEqual(hero1,hero2))
arr = [1,2,3,'zee']
// console.log(arr)
arr.name = 'khan'
// console.log(arr['name'])

// if(obj1.equals(obj2)){
//     console.log("yess eaual")
// }
// else{
//     console.log("no equal")
// }

// TypeError: obj1.equals is not a function
// ye error isiliye aaya q k equals() apan buffer object k sath use karte hai and buffer object mtlb "ARRAY OF INTEGER" and yaha tu object k sath compare kar aha hai.

a = "messi";
b = "messi";
c = "aeeshan"
// console.log(a.localeCompare(b))
// console.log(a<c);

// descending order
animals = ["ant", "bee", "dog", "cat", "elephant"]
// animals.sort(function (a, b) {
//   if (a > b) {
//     console.log("small",a>b)
//       return -1;
//   }
//   if (b > a) {
//     console.log("greater",b>a);
//       return 1;
//   }
//   return 0;
// });
// console.log(animals);
// ["elephant", "dog", "cat", "bee",]

const {log,warn} = console;

matrix = [[0, 1, 1, 2], 
          [0, 5, 0, 0], 
          [2, 0, 3, 3]]
// console.log(matrix);

matrix.forEach(element => {
  
  element.forEach(data =>{

    // console.log("g",data);
  })
  // console.log(element)
});

// function getCol(matrix, col){
//   var column = [];
//   for(var i=0; i<matrix.length; i++){
//      column.push(matrix[i][col]);
//      log(column)
     
//   }
//   log(column)
//   return column; // return column data..
// }
// matrix = [[0, 1, 1, 2], 
//           [0, 5, 0, 0], 
//           [2, 0, 3, 3]]
// getCol(matrix, 0)

