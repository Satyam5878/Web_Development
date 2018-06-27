var counter = function(arr){
  return "Size of array is "+ arr.length;
}
var add = function(a,b){
  return a+b;
}
//module.exports = {counter,add};
//console.log(counter(["1","2","3"]));
module.exports.counter = counter;
module.exports.add = add;

module.exports.pi = 3.142;
