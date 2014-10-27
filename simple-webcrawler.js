var program = require('commander');
var request = require('request');
var cheerio = require('cheerio');

program
  .version('0.0.1')
  .option('-u, --url', 'Root url to crawl')
  .parse(process.argv);
  
var visited = {};

function crawl(url) {
  if (visited[url]) return;
  visited[url] = true;
  request(url, function(err, res, body) {
    if (err) console.log(err);
    else {
      // do something with content (body) of the page
      
      // load page
      $ = cheerio.load(body);
      
      // get all anchors using cheerio
      var anchors = $('a').attr('href');
      anchors.forEach(crawl);
    }
  });
}

crawl(program.url);
