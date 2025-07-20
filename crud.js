const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'crud');
const pathname = `${dirpath}/apple.txt`;
// fs.writeFileSync(pathname,"this is a crud oppration");
// fs.readFile(pathname,'utf-8',(err,item)=>{
//     console.log(item)
// })
// fs.appendFile(pathname,' this is a another text',(err,item)=>{
//     if(!err) console.log(pathname,"file is updated");
// })
// fs.rename(pathname, `${dirpath}/orange.txt`,(err,item)=>{
//     if(!err) console.log(pathname,'file is rename')
// })
// fs.unlinkSync(`${dirpath}/orange.txt`);
// console.log('.....first script');
// setTimeout(()=>{
//   console.log('....second script')
// },2000)
// console.log('.....third script');
// let a = 10;
// let b = 20;
// setTimeout(()=>{
//     b=20;
// },2000);
// console.log(a+b);


let a = 10;
let b = 20;
const waitingdata = new Promise((resolve,reject)=>{
    setTimeout(() => {
       resolve(30) 
    },2000);
})
waitingdata.then((data)=>{
    b=data;
    console.log(a+b);
})
