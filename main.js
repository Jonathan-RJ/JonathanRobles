import observerAbout from "./js/controller-about.js";
import observerSkill from "./js/controller-rigth.js";
import {observerProyectTitle, proyectHoverCards} from "./js/controller-proyects.js";
import observerContact from "./js/controller-form.js";
import hamburguerOption from "./js/hambureguer.js";
import smooth from "./js/smooth.js";
document.addEventListener("DOMContentLoaded", (e) =>{
    observerAbout();
    observerSkill();
    observerProyectTitle();
    proyectHoverCards();
    observerContact();
    hamburguerOption();
    smooth();
})