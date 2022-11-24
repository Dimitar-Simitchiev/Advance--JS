function deleteByEmail() {
    let emailIntputElement=document.querySelector('input[name="email"]');
    let emailCelElements=document.querySelectorAll('tr td:nth-of-type(2)');
    let emailElemets=Array.from(emailCelElements);
    let targetElement=emailElemets.find(x=>x.textContent==emailIntputElement.value)
    let resultElemet=document.getElementById('result');
    if (targetElement) {

        targetElement.parentNode.remove();
        resultElemet.textContent='Deleted.'

    }else 
    {
        resultElemet.textContent='Not found.'
    }
    
    
}