const app = require('./app.js')
const colors = require('colors');
const fs = require('fs');
const { dirname } = require('path');
console.log(app.z())
let s = 10;
if(s==='10'){
    console.log("matched")
}

let arr = [4,6,8,3,7,8,9,3,3,4,5,7] 
const result = arr.filter((item,indexe)=>{
    return item > 5 && indexe % 2 === 0;
})
console.log(result.green) // Output: [6, 8, 8, 7]
console.log("This is a test".blue);
console.log("This is a test".red);
fs.writeFile('output.txt', 'Hello, World!', (err) => {
    if (err) throw err;
    console.log('The file has been saved!');
});
fs.writeFileSync('add.txt', 'This is a new file created synchronously.');
console.log("the dir name is",__dirname);
console.log("the file name is",__filename);
