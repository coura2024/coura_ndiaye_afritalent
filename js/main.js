// navbar qui change de style au scroll
const navbar = document.querySelector(".navbar");
if(navbar){
    window.addEventListener("scroll" ,function(){
    let navbar = document.querySelector(".navbar");
    if (window.scrollY > 50){
        navbar.classList.add("scrolled");
    } else{
        navbar.classList.remove("scrolled");
    }
});
}

// boutton retour en haut
// Affiche le bouton après 300px de scroll
const btnn=document.querySelector(".btnn");
if(btnn){
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
});
}

// toggle dark/light theme
const toggle = document.getElementById("toggleDark");
// Charger le thème sauvegardé
if(localStorage.getItem("theme") === "dark"){
        document.body.classList.add("dark-mode");
}
// verifier si le toggle existe
if(toggle){
    if(document.body.classList.contains("dark-mode")){
        toggle.classList.replace("bi-brightness-high-fill","bi-moon-fill");
    }
}

// Toggle du thème
toggle.onclick = () => {
    document.body.classList.toggle("dark-mode");
        const dark = document.body.classList.contains("dark-mode");
            localStorage.setItem("theme", dark ? "dark" : "light");
                toggle.classList.toggle("bi-moon-fill");
                toggle.classList.toggle("bi-brightness-high-fill");
};

// compteurs animés au scroll
document.querySelectorAll(".counter").forEach(counter=>{
    let observer = new IntersectionObserver(entries=>{
        if (entries[0].isIntersecting){
            observer.unobserve(counter);
            let i = 0;
            let interval= setInterval(()=>{
                if(counter.classList.contains("percent")){
                    counter.innerHTML=i + "%";
                }else{
                    counter.innerHTML=i + "+";
                }i++;
                if (i> counter.dataset.target)
                    clearInterval(interval);
            },20);
        }
    });
    observer.observe(counter);
})

// javascript du fade-in
const sections = document.querySelectorAll(".fade-in");
const observer = new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show");
        }
    });
});
sections.forEach(section=>{
    observer.observe(section);
});
// js date
document.getElementById("year").textContent=new Date().getFullYear();



