const url=`http://localhost:3030/jsonstore/messenger`;
const messages=document.getElementById('messages')

function attachEvents() {
    document.getElementById('submit').addEventListener('click',postMassage);
    document.getElementById('refresh').addEventListener('click',loadAllMassage);
    document.getElementById('delete').addEventListener('click',deleteAllMassage);
}
async function loadAllMassage() {
    const res =await fetch(url);
    const data=await res.json();
    messages.value=Object.values(data).map(({author,content})=>`${author}:${content}`).join('\n');
}
async function postMassage() {
    const [author,content]=[document.getElementById('author'),document.getElementById('content')];
    if (author.value!==''||content.value!=='') {
        await requsest(url,{author:author.value,content:content.value})
        author.value='';
        content.value='';
    }
    
}
async function requsest(url,option) {
    if (option) {
        option={
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify(option)
        }
    }
    const response = await fetch(url,option);
    return response.json()
}
 async function deleteAllMassage() {
    let option ={
        method:"DELETE"

    }
    fetch(url,option)
    .then(response=>console.log(response.status))
 
    messages.value='';
    
    
}
attachEvents();