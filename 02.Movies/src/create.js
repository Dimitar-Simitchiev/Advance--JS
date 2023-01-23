import { showView } from "./util.js";
import{homePage}from "./home.js"
const section=document.querySelector('#add-movie');
const form=section.querySelector('form');
form.addEventListener('submit',onSubmit);


export function createPage() {
    showView(section);
}
async function onSubmit(event) {
    event.preventDefault();

    const formData=new FormData(form);

    const title=formData.get('title');
    const description=formData.get('description');
    const img=formData.get('imageUrl');
    console.log(img)
    form.reset();
    await createMovie(title,description,img);
    
    homePage();
}
async function createMovie(title,description,img) {
    const user=JSON.parse(localStorage.getItem('user'))
    await fetch('http://localhost:3030/data/movies',{
        method:'POST',
        headers:{
            'Content-Type':'application/json',
            'X-Authorization':user.accessToken
        },
        body:JSON.stringify({title,description,img})
    })
    
    
}
window.createMovie=createMovie;

