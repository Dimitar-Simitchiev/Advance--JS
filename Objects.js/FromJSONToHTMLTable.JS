function solve(json) 
{
    let strArr=JSON.parse(json);
    let Key=['<tr>'];
    let Value=[];
    let valuieString='<tr>';
    let FinValue=[];
   
    function KeyMaker(strArr)
    {
     let strArr2 =strArr;
      
    for (const obj of strArr2) 
    {
        for (const ob in obj) 
        {
            
            if (!Key.includes(ob)) 
                {
                Key.push('<td>')
                 Key.push(ob);
                 Key.push('</td>')
                }   
        }
        
    }Key.push('</tr>')
    }
  

    function  ValueMaker(strArr)
    {
    let strArr2 =strArr
    for (const obj of strArr2) 
    {
        for (const ob in obj) 
        {
           
                 valuieString+='<td>'
                 valuieString+=(obj[ob]).toString();
                 valuieString+='</td>'
             
        }
        valuieString+='</tr>'
      Value.push(valuieString);
      valuieString='<tr>'
        
        
    }

    }
    
    KeyMaker(strArr);
    ValueMaker(strArr)
    console.log('<table>')
    console.log('   '+Key.join(''))
    for (let index = 0; index < Value.length; index++) 
    {
       console.log('   '+Value[index])
        
    }
    console.log('</table>')

}

solve(`[{"Name":"Pesho",
"Score":4,
"Grade":8},
{"Name":"Gosho",
"Score":5,
"Grade":8},
{"Name":"Angel",
"Score":5.50,
"Grade":10}]`
)