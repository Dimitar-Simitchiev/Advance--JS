function solve(arr) 
{

    let city={};
    
    

    for (let i = 0; i < arr.length; i++) 
    {
        let splitArr=arr[i].split(" <-> ");
        
        let name=splitArr[0];
        let popCity=Number(splitArr[1]);
        if (!city[name]) 
        {
            city[name]=popCity;
        }else
        {
           
            city[name]+=popCity;

        }
        
        
       
        
    }
    for (let c in city) 
    {
        console.log(c +' : '+city[c] )
    }
   
    
   

    
}

solve(['Istanbul <-> 100000',
'Honk Kong <-> 2100004',
'Jerusalem <-> 2352344',
'Mexico City <-> 23401925',
'Istanbul <-> 1000'])
