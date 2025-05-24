function toggleTheme() {
    const html = document.documentElement;
    
    html.classList.toggle("dark");    
}
const logo = document.querySelector(".logo");
const git = document.querySelector(".git-img");
const btn = document.querySelector(".dark-mode");
const svg = document.querySelector(".them-svg");
let isdark = false;

btn.addEventListener("click" , function(){
    if(isdark){
        logo.setAttribute("src" , "../src/AvalGraphic.com-Fasa-University.svg");
        git.setAttribute("src" , "../src/Social Icons git hub.svg");
        svg.setAttribute("src" , "../src/Moon Stars.svg");
        isdark = false;
    }else{
        logo.setAttribute("src" , "../src/FasaUniLogo1.svg");
        git.setAttribute("src" , "../src/Social Icons git hub-dark.svg");
        svg.setAttribute("src" , "../src/Sun.svg");
        isdark = true
    }
})