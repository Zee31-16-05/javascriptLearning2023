// function matrixElementsSum(int[][] matrix) {

//     int count=0;
//     for(int i=0;i<matrix.length;i++){
//         for(int j=0;j<matrix[0].length;j++){
//             if(matrix[i][j]==0){
//                 for(int k=i;k<matrix.length;k++){
//                     matrix[k][j]=0;
//                 }
//                 continue;
//             }
//             else
//                 count+=matrix[i][j];
//         }
//     }
//     return count;

// }

function mymatrix(matrix){
    count = 0;

    for(i=0;i<matrix.length;i++){
        for(j=0;j<matrix[i].length;j++){
            if(matrix[i][j]===0){
                break;
            }
            else{
                count = count + matrix[i][j];
                console.log(count);
                return count
            }
        }
    }
}
mymatrix([[0, 1, 1, 2], 
    [0, 5, 0, 0], 
    [2, 0, 3, 3]])

    const user = { 
        'name': 'Alex',
        'address': '15th Park Avenue',
        'age': 43
    }
    

    const {age, ...rest} = user;
    // console.log(age, rest)

    // function solution(matrix) {
    //     var total = 0;
        
    //     // Navigate each column of rooms
    //     // i = current column, j = current floor in column
    //     for (var i = 0; i < matrix[0].length; i++) {
                
    //         for (var j = 0; j < matrix.length; j++) {
    //             if (matrix[j][i] === 0) {
    //                 // This room is haunted, so we don't care about the rooms below it. 
    //                 // Continue to the next column of rooms
    //                 break;
    //             }
    //             total += matrix[j][i];
    //         }
            
    //     }
        
    //     return total;
    // }

inputArray = ["aba", "aa", "ad", "vcd", "aba"]

inputArray.map(element => {
    element.split('').map(data => {
        console.log(data)
    })
    console.log('helo')
    // console.log(element)
})