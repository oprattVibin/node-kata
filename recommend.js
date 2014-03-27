// Simple recommendation system in node
// Inspiration from: http://otobrglez.opalab.com/ruby/2014/03/23/simple-ruby-recommendation-system.html

// Read book titles from a file (create the corpus)
function createCorpus(path) {
  var fs = require('fs');
  
  fs.readFile(path, 'utcf8', function (err, data){
    if (err) {
      return console.log(err);
    }
    
    // Read file line by line
  });
}

// Based on a book title, recommend other titles
function recommend(title) {
}
