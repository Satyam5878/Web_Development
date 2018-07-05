/* 
console.log("Hello, Node is running");
setTimeout(function(){
  console.log("3 seconds have passed");
},3000);
 */

/* var time = 0;
setInterval(function(){
  time+=2;
  console.log(time +" Seconds have passed");
},2000);
 */


/* var time = 0;
var timer = setInterval(function(){
  time+=2;
  console.log(time +" Seconds have passed");
  if(time > 6){
    clearInterval(timer);
  }
},2000);
 */

/* 
console.log(__dirname);
console.log(__filename);
 */

/*
function sayHi(){
  console.log("Say Hi");
}

var sayBye = function(){
  console.log("Say Bye");
};

function calledFunction(funct){
  funct();
}
sayHi();
sayBye();
calledFunction(sayHi);
calledFunction(sayBye);
*/

/* 
var func = require("./Counter");

console.log(func.add(3,4));
 */
/* 
var couterFile = require("./Counter");
console.log(couterFile.counter([1,2,3]));
console.log(couterFile.pi);
*/

/*
var events = require("events");

var myEmitter = new events.EventEmitter();

myEmitter.on("someEvent", function(msg){
  console.log(msg);
});

myEmitter.emit("someEvent","someEvent occured");
*/



/*
var events = require("events");
var util = require('util');

// Constructor
var Person = function(name){
  this.name = name;
};

util.inherits(Person,events.EventEmitter);

var james = new Person("james");
var joy = new Person("joy");
var sikhar = new Person("sikhar");

var people = [james,joy,sikhar];

people.forEach(function(person){
  person.on("speak",function(msg){
    console.log(`${person.name} said: ${msg}`);
  });
});
james.emit("speak","hello peoples");
*/


/*
var fs = require("fs");

var readMe = fs.readFileSync("readMe.txt","utf8");
console.log(readMe);

fs.writeFileSync('writeMe.txt',readMe);
*/



/*
var fs = require("fs");

fs.readFile("readMe.txt","utf8",function(err,data){
  //console.log(data);
  fs.writeFile("writeMe.txt",data);
});

*/

/*
var fs = require("fs");
fs.unlink("writeMe.txt");
*/

var fs = require("fs");
//fs.mkdirSync("Stuff");

//fs.rmdirSync("Stuff");
/*
fs.mkdir("Stuff",function(){
  fs.readFile("readMe.txt",function(error,data){
    fs.writeFile("Stuff/writeMe.txt",data);
  });
});
*//*
fs.unlink("Stuff/writeMe.txt",function(){
  fs.rmdir("writeMe.txt",function(){
    console.log("Done");
  });
});
*/



// Read Stream
/* 
var https = require("https");
var fs = require("fs");
//var sleep = require("system-sleep");

var readStream = fs.createReadStream(__dirname+"/readMe.txt",'utf8');
readStream.on("data",function(chunk){
  console.log(chunk);
  console.log("sleeping for 10 secs.....");
  //sleep(10000);s
  
}); */

/* 
// Write Stream 
var https = require("https");
var fs = require("fs");

var readStream = fs.createReadStream(__dirname+"/readMe.txt",'utf8');
var writeStream = fs.createWriteStream(__dirname+"/writeMe.txt","utf8");
readStream.on("data",function(chunk){
  console.log("Write new chunk");
  writeStream.write(chunk);
   
});
 */


 // Pipes
/* var https = require("https");
var fs = require("fs");

var readStream = fs.createReadStream(__dirname+"/readMe.txt",'utf8');
var writeStream = fs.createWriteStream(__dirname+"/writeMe.txt","utf8");

readStream.pipe(writeStream);
 */
