const toggle=document.querySelector('.dropdown-toggle');
const navigation=document.querySelector('header .navigation');
const hamimg=document.querySelector('.ham-img');
const close_img=document.querySelector('.close-img');


toggle.addEventListener('click',()=>{
    if(close_img.classList.contains('active')){
        close_img.classList.remove('active')
    }
    else{
        close_img.classList.add('active')
    }
    if(hamimg.classList.contains('d')){
        hamimg.classList.remove('d')
    }
    else{
        hamimg.classList.add('d')
    }
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    }
    else{
        navigation.classList.add('active')
    }
})

