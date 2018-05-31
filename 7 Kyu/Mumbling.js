/*
This time no story, no theory. The examples below show you how to write function accum:

Examples:

accum("abcd");    // "A-Bb-Ccc-Dddd"
accum("RqaEzty"); // "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt");    // "C-Ww-Aaa-Tttt"

The parameter of accum is a string which includes only letters from a..z and A..Z.


*/

//20180531
function accum\(str\){
  let arr = str.split(\'');
  let flag = 0;
  for(let i = 0; i< arr.length; i++){
    arr[i] = arr[i].toUpperCase();
    let temp = new Array(flag);
    temp.fill(arr[i].toLowerCase());
    temp.push('-');
    eval("arr.splice(" + (i + 1).toString() + ", 0, \'" + temp.join('\', \'') + "\')");
    i = i + flag + 1;
    flag++;
  }
  arr.pop();
  return arr.join('');
}
​
