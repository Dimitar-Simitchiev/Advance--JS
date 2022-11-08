function solve(arr)
{
    let sum1=0;
    let sum2=0;
    let sum3='';
  for (let result of arr) 
  {
    sum1+=result;
    sum2+=1/result;
    sum3+=result.toString();
    
  }
  console.log(sum1)
  console.log(sum2)
  console.log(sum3);

    
}
solve([1, 2, 3]);
solve([2, 4, 8, 16]);