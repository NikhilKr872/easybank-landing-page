const toggle=document.querySelector('.dropdown-toggle');
const navigation=document.querySelector('header .navigation');

toggle.addEventListener('click',()=>{
    if(navigation.classList.contains('active')){
        navigation.classList.remove('active')
    }
    else{
        navigation.classList.add('active')
    }
})