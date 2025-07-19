const app = require('./app.js')

console.log(app.z())
let s = 10;
if(s==='10'){
    console.log("matched")
}

let arr = [4,6,8,3,7,8,9,3,3,4,5,7] 
const result = arr.filter((item,indexe)=>{
    return item > 5 && indexe % 2 === 0;
})
console.log(result) // Output: [6, 8, 8, 7]