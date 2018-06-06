/*
Move the first letter of each word to the end of it, then add ay to the end of the word. Leave punctuation marks untouched.

Examples
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
pigIt('Hello world !');     // elloHay orldWay !

*/

//20180604
function pigIt(str){
  arr = str.split(' ');
  arr.forEach(function(w, i){
      if(/^[a-z|A-Z]*$/.test(w)){
          arr[i] = w.slice(1) + w.charAt(0) + 'ay';
      }
  });
  return arr.join(' ');
}

