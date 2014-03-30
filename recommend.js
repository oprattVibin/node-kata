// Simple recommendation system in node
// Inspiration from: http://otobrglez.opalab.com/ruby/2014/03/23/simple-ruby-recommendation-system.html
require('sugar');

// Read book titles from a file (corpus file)
function createCorpus(path, title) {
  var fs = require('fs');
  
  var list = fs.readFileSync(path).toString().split("\n");
  
  // object to save book_title and it's corresponding index
  var map = {};
  
  list.each(function (book_title){
    // Compute union of title and book_title
    var aub = union(book_title, title);
    // Compute intersection of title and book_title
    var anb = intersection(book_title, title);
    
    // Jaccard index, J(A, B) = A n B / A u B
    map[book_title] = anb / aub;
  });
  
  return map;
}

// Based on a book title, recommend other titles
function recommend(title) {
}

// Create a list of unique words of length greater than 2
// from a sentence (book title in this case)
function words(sentence) {
  var words = sentence.words(function (w) {
    if (w.length > 2)
      return n.toLowerCase();
  }).sortBy();
}
