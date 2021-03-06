import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup)=>{
  if (err){
    return console.log(err.red);
  }

  const $ = cheerio.load(markup);

  // since a separate spreedsheet is only utilized for the production build. need to dynamic
  $('head').prepend('<link rel="stylesheet" href="styles.css" >');
  fs.writeFile('dist/index.html', $.html(), 'utf8', function (err) {
    if (err){
      return console.log(err.red);
    }

    console.log('index.html written to /dist'.green);
  });
});
