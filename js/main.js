/*navbar qui change de style au scroll */
window.addEventListener("scroll" ,function(){
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});

/* boutton retour en haut*/
// Affiche le bouton après 300px de scroll
const btnn=document.querySelector(".btnn");
window.addEventListener("scroll",()=>{
    if(window.scrollY > 300){
        btnn.classList.add("show");
    }else{
        btnn.classList.remove("show");
    }
})
// retour en haut au clik
btnn.addEventListener("click",()=>{
    window.scrollTo({
        top:0,
        left:0,
        behavior:"smooth" /* comportement doux*/
    })
})
//sauvegarder le theme toggle
const toggle=document.querySelector(".navbar-toggler");
const body=document.body;
let theme = localStorage.getItem("navbar");
if(theme){
    body.classList.add(theme);
}else{
    body.classList.add("btn-light");
}


