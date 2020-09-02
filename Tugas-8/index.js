// // nomor 1
var readBooks = require('./callback.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000},
    {name: 'komik', timeSpent: 1000}
]

readBooks(10000,books[0],function(check){
        readBooks(7000,books[1],function(check){
          readBooks(5000,books[2],function(check){
            readBooks(1000,books[2],function(check){
              console.log("done")
            })
          })
        })
  })

// var i = 0, waktu = 10000,waktuSisa = 0;
// while( i < books.length){
//   readBooks(waktu-waktuSisa,books[i],function(check){
//         if(check) {
//             console.log("next book")
//         } else {
//             console.log("done")
//         }
//   })
//   waktuSisa = books[i].timeSpent
//   i++;
// }
  
  
// for(var i = 0; i<books.length;i++){
//     readBooks((10000-books[i].timeSpent),books[i],function(check){
//       if(check) {
//           console.log("next book")
//       } else {
//           console.log("done")
//       }
//     })
//   }

