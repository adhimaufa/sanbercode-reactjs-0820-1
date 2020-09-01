// soal 1
class Animal {
  constructor(name) {
    this.name = name;
    this.legs = 4;
    this.cold_blooded = false
  }
  get cnam() {
    return `${this.name} ${this.legs} ${this.cold_blooded}`
  }
}
 
var sheep = new Animal("shaun");
console.log(sheep.cnam)

class Ape extends Animal {
  constructor(name) {
    super(name);
    this.name = name;
  }
  yell() {
    return 'Auo0o';
  }
}

class Frog extends Animal {
  constructor(name) {
    super(name);

  }
  jump() {
    return 'hop hop';
  }
}

var sungokong = new Ape("kera sakti")
sungokong.yell()
 
var kodok = new Frog("buduk")
kodok.jump()

// soal 2
class Clock{
  constructor({template}){
    this.template = template;
    this.timer;
  }
  render(){
    var date = new Date();

    var hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    var mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    var secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    var output = this.template
      .replace('h', hours)
      .replace('m', mins)
      .replace('s', secs);

    console.log(output);
  }

  stop() {
    clearInterval(this.timer);
  };

  start() {
    this.render.bind(this);
    this.timer = setInterval(this.render(), 1000);
  };

}

var clock = new Clock({template: 'h:m:s'});
clock.start(); 