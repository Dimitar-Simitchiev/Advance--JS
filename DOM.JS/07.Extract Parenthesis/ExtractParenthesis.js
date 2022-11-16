function extract(content) 
{
    let elemetEelemen=document.getElementById(content);
    let element =elemetEelemen.textContent;
    let word='';
    let isOper=false;
    let arrwords=[];
    for (let i= 0; i < element.length; i++) {
        
        if (element[i]=='('||isOper==true) 
        {
            isOper=true;
            word+=element[i];
           

        }
        if (element[i]==')') 
        {  
            let subword=word.substring(1,word.length-1)
            arrwords.push(subword)
            isOper=false;
            word='';
        }

    }
    
    let result=arrwords.join('; ').toString();
    return result;

}