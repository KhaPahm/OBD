// 'use strict';
// const fs = require('fs');
// const readline = require('readline');

// function data() {
//     const stream = fs.ReadStream('../data.csv');
//     const rl = readline.createInterface({input: stream});
//     let data = [];
//     rl.on("line", (row) => {
//         data.push(row.split(","));
//     });
//     rl.on("close", () => {
//         // data.forEach((index, data) => {
//         let respone = [];
        
//         for (let index = 0; index < data.length; index++) {
//             // const element = array[index];
//             if(index !== 0) {
//                 let row = {
//                     Time:  data[index][0],
//                     Nhiet_do: data[index][1],
//                     Muc_nuoc: data[index][2],
//                     Trang_thai_cong: data[index][3],                        
//                     Do_man: data[index][4],
//                 }
//                 respone.push(row)
//             }
//         }
//         // console.log(respone);
//         return respone
//     });
// // 
//     // return respone;
// }

// console.log(data());
// // data();
// // module.exports = {data}