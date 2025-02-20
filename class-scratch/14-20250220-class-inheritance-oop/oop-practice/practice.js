// Welcome to your OOP practice!
// Use this file to write and test your answers to the questions.
console.log('Start practicing OOP concepts!');


// Question 1: Basic Class Creation
class Movie {
  constructor(title, year = 'uknown', rating = 'unkown') {
    this.title = title,
    this.year = year
    this.rating = rating; 
  }

  getDetails() {
   console.log(`${this.title} (${this.year}) -  ${this.rating}`);
  }

  
 

/* 
  setRating(rating){
    this.rating = rating;
  }

  getRating(){

  } */
}



//Question 2: Working with Multiple Objects; creat two instances
let movieInstance = new Movie('The Matrix', 1999, 4.5);
movieInstance.getDetails();
let movieInstance1 = new Movie('Frozen', 2013);
movieInstance1.getDetails();


// Question 3: Extending a Class; 'Series'
class Series extends Movie {
  constructor(title, year, episodes) {
    super(title, year)
    this.episodes = episodes
  }

  getSeriesDetails() {
    console.log(`${this.title} (${this.year}) - ${this.episodes}`)
  }
}

const seriesInstance = new Series('Stranger Things', 2016, 25);
seriesInstance.getSeriesDetails();


//Question 4: Using constructor Defaults; modify movie class to default unknown
// changed in original Movie class
const movieInstance2 = new Movie('LOTR');
movieInstance2.getDetails();
const movieInstance3 = new Movie('LOTR2', 1999);
movieInstance2.getDetails();


//Question 5: Encapsulation with Properties; private peoperty and methods
//wot


//Question 6: Working with arrays

const movieList = [
{
  title: 'LOTR 1',
  year: '1999', 
  rating: '10',
},
{
  title: 'LOTR 3',
  year: '2000', 
  rating: '10',
},
{
  title: 'LOTR 2',
  year: '2001', 
  rating: '10',
}
]

function getAllDetails(moviesList){
  const movieArrayInstances = movieList.map((m) => {
    const movieInstance = new Movie (m.title, m.year, m.rating);
    console.log (movieInstance);
    });
};  
/* getAllDetails(movieList) */

function getDetails(){
  console.log(getAllDetails(movieList));
}

getDetails(movieList);


//Question 7: Simple Inheritance; create documentary extend movie class

class Documentary extends Movie {
  constructor(){}
}
