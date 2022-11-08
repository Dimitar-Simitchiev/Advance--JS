function solve(s1,s2,s3) {
    let result=0;
    if(s1>s2&&s1>s3)
    {
        result=s1;
    }
    if(s2>s1&&s2>s3)
    {
        result=s2;
    }
    if(s3>s2&&s3>s1)
    {
        result=s3;
    }
   
       
        console.log('The largest number is '+result+'.')
    
}
solve(5, -3, 16)
solve(-3, -5, -22.5)