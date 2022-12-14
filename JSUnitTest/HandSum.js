function solve(intput,start,end) {
    if (!Array.isArray(intput)||!onlyNumbers(intput)) {
        return NaN
    }else{
    
    let startIndex=Math.max(0,start)
    let endIndex=Math.min(intput.length-1,end)
    let sumintput=intput.slice(startIndex,endIndex+1)
    let sum = sumintput.reduce((partialSum, a) => partialSum + a, 0);
    return sum;
    }
    function onlyNumbers(array) {
        return array.every(element => {
          return typeof element === 'number';
        });
      }
}
solve([10, 20, 30, 40, 50, 60], 3, 300)
solve([1.1, 2.2, 3.3, 4.4, 5.5], -3, 1)
