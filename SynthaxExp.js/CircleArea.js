function solve(intput) 
{
    let result=0;
    let chekIntput=typeof(intput);
    if (chekIntput=='number')
    {
        result=Math.pow(intput,2)*Math.PI;
        console.log(result.toFixed(2))
        
    }
    else{
        console.log('We can not calculate the circle area, because we receive a '+chekIntput+'.')
    }
}
solve('name');
solve(5);