var array = process.argv.slice(2)
for(var i = 0; i < array.length; i++) {
 console.log(reverse(array[i]));
}

function reverse(str) {

var newString = "";
for (var i = str.length-1; i >= 0; i--) {
  newString += str[i];
}
return newString;
}
