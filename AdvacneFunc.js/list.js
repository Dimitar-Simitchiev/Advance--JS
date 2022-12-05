function solve(intput) 
{ 
    let result=[];
   for (let prop of intput) 
   {
    let splitProp=prop.split(' ');
    let func=splitProp[0];
    let value=splitProp[1];
    if (func=='add')
    {
        result.push(value);
        
    }
    if (func=='remove')
    {
        while (result.includes(value)) 
        {
            const index = result.indexOf(value);
            if (index > -1) { // only splice array when item is found
            result.splice(index, 1); // 2nd parameter means remove one item only
        }
           
        }
        
    }
    if (func=='print') 
    {
       console.log(result.join(','))
    }
   }
    
}
solve(['add hello', 'add again', 'remove hello', 'add again', 'print']);

solve(['add pesho', 'add george', 'add peter', 'remove peter','print']);