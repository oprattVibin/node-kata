var program = require('commander');
var req = require('request');
var cheerio = require('cheerio');

program
  .version('0.0.1')
  .option('-u, --url', 'Root url to crawl')
  .parse(process.argv);
  
var visited = {};

function crawl(url) {
  if (visited[url]) return;
  request(url, function(err, res, body) {
    if (err) console.log(err);
    else {
      // read page
      $ = cheerio.load(body);
      // get all anchors using cheerio
      var anchors = $('a').attr('href');
      anchors.forEach(crawl);
      anchors.forEach(function (u) {
        visited[u] = true;
      });
    }
  });
}

visited[program.url] = true;
crawl(program.url);
