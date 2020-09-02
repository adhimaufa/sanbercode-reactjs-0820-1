let sisaWaktu1
function readBooks(time, book, callback ) {
    console.log("saya membaca " + book.name)
    setTimeout(function(){
        sisaWaktu = parseInt(sisaWaktu1);
        if(time >= book.timeSpent) {
            sisaWaktu = time - book.timeSpent
            
            console.log(`saya sudah membaca ${book.name}, sisa waktu saya ${sisaWaktu}`)
            callback(sisaWaktu) //menjalankan function callback
        } else {
            console.log('waktu saya habis')
            callback(time)
        }   
    }, book.timeSpent)
}
 
module.exports = readBooks 

// Deklarasi function yang memilik callback sebagai parameter
// function periksaDokter(nomerAntri, callback) {
//     if(nomerAntri > 50 ) {
//         callback(false)
//     } else if(nomerAntri < 10) {
//         callback(true)
//     }    
// } 

//  module.exports = periksaDokter 