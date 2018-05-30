/*
Your task is to write function findSum.

Upto and including n, this function will return the sum of all multiples of 3 and 5.

For example:

findSum(5) should return 8 (3 + 5)

findSum(10) should return 33 (3 + 5 + 6 + 9 + 10)
*/

//20180525
function findSum(n) {
  const f = parseInt(n/5);
  const t = parseInt(n/3);
  const ft = parseInt(n/15);
  return 5*sum(f) + 3*sum(t) - 15*sum(ft);
}
function sum(n){
  if(n === 0){
     return 0;
  }else{
     return n + sum(n-1);
  }
}

