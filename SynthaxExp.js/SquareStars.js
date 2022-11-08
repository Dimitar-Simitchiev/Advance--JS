function solve(n) 
{
    let a='*';
    var array = [];
    for(var i = 1; i <= n; i++)
    {
       array.push(a);
    }
    
    for (let i = 0; i < n; i++) 
    {
       
        
           console.log(array.join(' '))
            
        
       
    }
}
solve(5)