let sb = [];
let ghoste = [];
let pouya = [];
let jwrld = []; 


function fisherShuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }
  
  // Used like so
  var arr = ["ive", "been", "loving", "every", "day", "a", "little", "more"];

  fisherShuffle(arr);
  console.log(arr);