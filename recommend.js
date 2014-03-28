// Simple recommendation system in node
// Inspiration from: http://otobrglez.opalab.com/ruby/2014/03/23/simple-ruby-recommendation-system.html
require('sugar');

// Read book titles from a file (create the corpus)
function createCorpus(path) {
  var fs = require('fs');
  
  var list = fs.readFileSync(path).toString().split("\n");
  
  list.each(function (title){
    // compute the jaccard index
  })
}

// Based on a book title, recommend other titles
function recommend(title) {
}
