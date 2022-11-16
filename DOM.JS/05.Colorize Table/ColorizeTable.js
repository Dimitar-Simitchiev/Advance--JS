let elemets=document.getElementsByTagName('tr');
let arr=Array.from(elemets);
arr.forEach((x,i) => {
if (i%2!==0) 
{
  x.style.background='teal' 
}
    
});