function check(){
   
    let fitstElement=document.getElementById('first');
    let secondElement=document.getElementById('second');
    let chekElement=document.getElementById('check')
    let num1=Number(fitstElement.textContent);
    let num2=Number(secondElement.textContent);
    let result =document.getElementById('result')
    let resumtnum=Number(result.value);
    if (num1+num2==resumtnum)
    {
        chekElement.textContent="Yor answeris TRUE! The result it: "+resumtnum
    }else
    {
        chekElement.textContent="Yor answer is FALSE! The result is:  "+(num1+num2)

    }
}
function randomNumbers(){

    let fitstElement=document.getElementById('first');
    let secondElement=document.getElementById('second');
    let rand1=Math.floor(Math.random() * 100);
    let rand2=Math.floor(Math.random() * 100);
  
     fitstElement.textContent=rand1.toString();
     secondElement.textContent=rand2.toString();
    

}