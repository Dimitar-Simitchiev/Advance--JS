
function solution(n) 
{
    let a=n;
  return function add(a) {
    return a+n;
  }
}


let add5 = solution(5);
console.log(add5(2));
console.log(add5(3));
