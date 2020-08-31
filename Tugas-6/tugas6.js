// soal 1
let luasLingkaran = radius => 3.14*radius*radius;
const kelilingLingkaran = radius => 3.14*(radius*2);

console.log(luasLingkaran(10));
console.log(kelilingLingkaran(10));

// soal 2
let kalimat="";

let tambahKata = kata => kalimat += `${kata} `

tambahKata("saya");
tambahKata("adalah");
tambahKata("seorang");
tambahKata("frontend");
tambahKata("developer");
console.log(kalimat);

// soal 3
const newFunction = (firstName, lastName) => {
  return {
    firstName: firstName,
    lastName: lastName,
    fullName: () => console.log(firstName + " " + lastName)
  }
}

newFunction("William", "Imoh").fullName() 

// soal 4
const newObject = {
  firstName: "Harry",
  lastName: "Potter Holt",
  destination: "Hogwarts React Conf",
  occupation: "Deve-wizard Avocado",
  spell: "Vimulus Renderus!!!"
}

const {firstName,lastName,destination,occupation,spell} = newObject;
console.log(firstName, lastName, destination, occupation, spell);

// soal 5
const west = ["Will", "Chris", "Sam", "Holly"]
const east = ["Gill", "Brian", "Noel", "Maggie"]
const combined = [...west,...east]
console.log(combined)