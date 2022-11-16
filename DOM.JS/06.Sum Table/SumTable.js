function sumTable() {
    let elemets=document.getElementsByTagName('td');
    let sumElement=document.getElementById('sum');
    let arr=Array.from(elemets);
    let sum=0;
    let number=0;
    for (let index = 0; index < arr.length; index++) {
        
        if (index%2!=0&&index!=arr.length-1)
        {   number+=Number(arr[index].textContent);
             

            
        }
    }
    sumElement.textContent=number
  

}