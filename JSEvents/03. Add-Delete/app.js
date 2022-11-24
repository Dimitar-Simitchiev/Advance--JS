function addItem() {
   let textElement=document.getElementById('newItemText');
   let liElement=document.createElement('li');
   let itemElement=document.getElementById('items');
   liElement.textContent=textElement.value;
   let deleteElement=document.createElement('a');
   deleteElement.href='#';
   deleteElement.textContent='[Delete]';
deleteElement.addEventListener('click',(e)=>{
    e.currentTarget.parentElement.remove();
})
   liElement.appendChild(deleteElement);
   itemElement.appendChild(liElement);



}