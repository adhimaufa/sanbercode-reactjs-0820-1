// nomor 2
var readBooksPromise = require('./promise.js')
var sisaWaktu = require('./promise.js')
 
var books = [
    {name: 'LOTR', timeSpent: 3000}, 
    {name: 'Fidas', timeSpent: 2000}, 
    {name: 'Kalkulus', timeSpent: 4000}
]

function tagih(){
    readBooksPromise(10000,books[0]).then(function (fulfilled) {
            readBooksPromise(7000,books[1]).then(function (fulfilled){
                readBooksPromise(5000,books[2]).then(function (fulfilled){

                })
            })
        }).catch(function (error) {
            console.log(error.sisaWaktu);
        });
}

tagih();
