// 1. Find the number of islands
// Given a boolean 2D matrix, find the number of islands. A group of connected 1s
// forms an island.For example, the below matrix contains 5 islands
// const matrix = [
// [1, 1, 0, 0, 0],
// [0, 1, 0, 0, 1],
// [1, 0, 0, 1, 1],
// [0, 0, 0, 0, 0],
// [1, 0, 1, 0, 1]
// ];
// Output: 5


function island(){
    let n = matrix.length;
    let count =0;
    for (let index = 0; index < n; index++) {
        if(visited[index] == false){
            dftraversal(index);
            count++;
        }
    }
    console.log('Number Of Island is : ' + count);
}

function dftraversal( currVtx) {
    visited[currVtx] = true;
    for (let i = 0; i < matrix.length; i++) {
        if (!visited[i] && matrix[currVtx][i] === '1')
            dftraversal(matrix, i, visited);
    }
}


const matrix = [
[1, 1, 0, 0, 0],
[0, 1, 0, 0, 1],
[1, 0, 0, 1, 1],
[0, 0, 0, 0, 0],
[1, 0, 1, 0, 1]
];

var visited = new Array(matrix.length).fill(false);

island();