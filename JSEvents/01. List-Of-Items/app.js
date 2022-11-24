function addItem() {
   let textElement=document.getElementById('newItemText');
   let liElement=document.createElement('li')

   let intputElement=document.getElementById('items');
   liElement.textContent=textElement.value;

  intputElement.appendChild(liElement);

}