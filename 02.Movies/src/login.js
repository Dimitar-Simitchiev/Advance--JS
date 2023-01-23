import { homePage } from "./home.js";
import { showView, updateNav } from "./util.js";

const section=document.querySelector('#form-login');
const form=section.querySelector('form');
form.addEventListener('submit',onSubmit)

async function onSubmit(event) {
    event.preventDefault();
    const formData=new FormData(form);
    const email=formData.get('email');
    const password=formData.get('password');
    await login(email,password);
    updateNav();
    homePage();
    

}
export function loginPage() {
    showView(section);
    
}

async function login(email,password) {
    try {
        const res=await fetch('http://localhost:3030/users/login',{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({email,password})
           
        }) 
        if (!res.ok) {
            const erro=await res.json();
        throw new Error(erro.message)
        }
        const user=await res.json();
        localStorage.setItem('user',JSON.stringify(user))

        } catch (err) {
        alert(err.message);
        throw err;
    }
}
window.login=login;

