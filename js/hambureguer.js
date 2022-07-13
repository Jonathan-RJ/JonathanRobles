export default function hamburguerOption(){
const d = document, $button = d.querySelector(".hamburger-cont"), $nav = d.querySelector("nav"), $main = d.querySelector("main"),
$hamEffecct = d.querySelector(".hamburger"), $menuSelect = d.querySelector(".cont-element-nav");
$button.addEventListener("click", e =>{
    $nav.classList.toggle("active-hamburguer");
    $hamEffecct.classList.toggle("is-active");
})

$main.addEventListener("click", e =>{
    $nav.classList.remove("active-hamburguer");
    $hamEffecct.classList.remove("is-active")
})

$menuSelect.addEventListener("click", e =>{
    $nav.classList.remove("active-hamburguer")
    $hamEffecct.classList.remove("is-active")
})

}
