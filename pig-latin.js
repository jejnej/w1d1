var array = process.argv.slice(2)
for(var i = 0; i < array.length; i++) {
  console.log(pigTranslator(array[i]));
}



function pigTranslator(str) {
  var pigLatin = str;
  for(var i = 0; i < str.length; i++) {

    pigLatin = str.slice(1) + str[0] + "ay";

  }
  return pigLatin;
}




