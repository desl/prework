//Write a function called rotate which takes an array and a number, and moves each element however many spaces the number is to the right. For the value at the end of the array, rotate should move it back to the beginning.

function rotate (arr, distance){
  for (var i = 0; i<distance; i++){
    arr.unshift(arr[arr.length-1]);
    arr.pop();
  }
  return arr;
}
console.log(rotate([1,2,3], 1)); // [3,1,2]
console.log(rotate([1,2,3], 2)); // [2,3,1]
console.log(rotate([1,2,3], 3)); // [1,2,3]

//Write a function called makeXOGrid which takes in two parameters, rows and columns, and returns an array of arrays with the number of values in each subarray equal to the columns parameter and the number of subarrays equal to the rows parameter. The values in the sub-arrays should switch between "X" and "O".

// This exercise was a real fucker, having to declare each subarray...I dont' think any of the lessons covered that.

function makeXOGrid (rows, columns){
  var newArr =[];
  var valueIsX = false;
  
  for (var i=0; i < rows; i++){
    newArr[i]=[];
    for (var j=0; j < columns; j++){
      if (valueIsX === false){
        newArr[i][j] = "X";
        valueIsX = true
        //console.log(i,j, "X");
        //console.log("X");
      } else {
        newArr[i][j] = "O";
        valueIsX = false;
        //console.log("O");
        //console.log(i,j,"O");
      }
    }
  }
  return newArr;
}

console.log(makeXOGrid(1,4)); /*/[["X","O","X","O"]]/*/
console.log(makeXOGrid(3,2));/*/[["X","O"],["X","O"],["X","O"]]/*/
console.log(makeXOGrid(3,3));/*/[["X","O","X"],["O","X","O"],["X","O","X"]]/*/








