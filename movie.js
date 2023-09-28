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
const moviesList = [
    new Movie("Iron-Man", "Marvel Production", "PG"),
    new Movie("Aqua-Man", "DC Production", "R"),
    new Movie("Trans-Former", "StarWars Production", "PG"),
    new Movie("Captain-America", "Marvel Production"),
    new Movie("Bad-Boy's", "Carnivel Production", "PG-13"),
]


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
