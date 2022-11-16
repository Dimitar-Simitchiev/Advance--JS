function editElement(elements,match,replacer) 
{
    while (elements.textContent.includes(match)) 
    {
    elements.textContent= elements.textContent.replace(match,replacer);
    }
}

    