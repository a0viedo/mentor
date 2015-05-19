var minimist = require('minimist');
var util = require('util');
var argv = minimist(process.argv);
var mentorsList = require('./mentors.json');

if (argv.list) {
    console.log(util.format("There are a total of %s mentors around the world." +
        " The detailed names:", mentorsList.length));
    mentorsList.forEach(function(m) {
        console.log('- ' + m);
    });
    return;
}

//clear terminal 
process.stdout.write('\033c');
console.log("\n\n");
var i = 0;
var interval = setInterval( function() {
  process.stdout.clearLine();
  process.stdout.cursorTo(0);
  process.stdout.write(mentorsList[Math.floor(Math.random() * mentorsList.length)]);
  if (i++ > 10) {
    clearInterval(interval);
    console.log("\n\n");
  }
}, 100 );
