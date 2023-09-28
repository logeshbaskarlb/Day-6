class Movies {
  constructor(title, studio, rating = "PG") {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}
//a)
var mov = new Movies("Leo", "Seven Screen", "9.9");
console.log(
  `Hi, This is ${mov.title} the title of the flim.This is taken by t ${mov.studio} studio and I will give ${mov.rating}.`
);

//b)
var mov = new Movies("Leo", "Seven Screen");
console.log(
  `Hi, This is ${mov.title} the title of the flim.This is taken by t ${mov.studio} studio and I will give ${mov.rating}.`
);

//c)Write a method getPG, which takes an array of base type Movie
//as its argument, and returns a new array of only those movies
// in the input array with a rating of "PG". You may assume the
//input array is full of Movie instances. The returned array need
// not be full.



//d)
class flim {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }
}

var flims = new flim("Casino Royale", "Eon Productions", "PG­13");
console.log(flims);
