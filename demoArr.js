
function Solve(Egn) 
{ 
    let sumcoef=0;
    let coevicent= [ 2,4,8,5,10,9,7,3,6];
    let isEgn=true;
    let sum=0;
    let pol='';
    let mesec=Number(Egn[2]+Egn[3])
    let godina='';
    let den='';
    den=Egn[4]+Egn[5];
    if (Egn[8]%2==0||Egn[8]==0)
    {
         pol+='M';
    }
    else
    {
         pol+='F';
    }
   
    if (Egn.length==10)
    {

        
      
        for (let i = 0; i < Egn.length-1; i++) 
        {
            let current=Number(Egn[i])
            let current2=Number(coevicent[i])
            sumcoef+=current*current2;
        
             sum=sumcoef%11;
             let last=Number(Egn[9]);
             
             if (sum==last||Egn[9]==0)
             {
                isEgn=true;
             }
             else
             {
                isEgn=false;
             }
                                       
        }
           
        
        if (40-mesec<0&&40-mesec<=12)
        {
            godina='20'+Egn[0]+Egn[1];
            mesec=Number(Egn[2]+Egn[3])-40
            if (mesec<10)
            {
                let nula='0'
                mesec=nula+mesec.toString()
                
            }
                  
        }
        else{
            godina='19'+Egn[0]+Egn[1];
            mesec=Number(Egn[2]+Egn[3])
            if (mesec<10)
            {
                let nula='0'
                mesec=nula+mesec.toString()
                
            }
        }          
       

        
    }
    else
    {
        isEgn=false;
       
    }

    if (isEgn==true)
    {
        console.log('TRUE')
        console.log(godina+'-'+mesec+'-'+den)
        console.log(pol);
        
    }
    else{
        console.log('FALSE')
    }
  
 
    
 


}
Solve('2204272374');

