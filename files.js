const fs = require('fs');
const path = require('path');
const dirpath = path.join(__dirname,'folder');
for(let i =0;i<5;i++){
    fs.writeFileSync(dirpath+"/hello"+i+".txt","this is my file");
}
// fs.readdir(dirpath,(err,files)=>{
//    console.log(files)
// })
fs.readdir(dirpath,(err,files)=>{
files.forEach((item)=>{
    console.log(item)
})
})

