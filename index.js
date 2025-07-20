// const http = require('http');
// http.createServer((req,res)=>{
//     res.write("Imrana I love you");
//     res.end()
// }).listen(3000)
// const data = require('./data.js');
// const http = require('http');
// http.createServer((req,res)=>{
//     res.writeHead(200,{json: 'application/json'});
//     res.write(JSON.stringify(data));
//     res.end();
// }).listen(1000)
// const fs = require('fs');
// const input = process.argv;
// fs.writeFileSync(input[2], input[3]);
// console.log("File created successfully with name:", input[2]);
// if(input[2]==='add'){
//     fs.writeFileSync(input[3], input[4]);
//     console.log("File created successfully with name:", input[3]);
// }else if(input[2]==='remove'){
//     fs.unlinkSync(input[3]);
//     console.log("File removed successfully with name:", input[3]);

// }else{
//     console.log("Invalid command. Use 'add' to create a file or 'remove' to delete a file.");
// }