const d = document, $about = d.getElementById("about"), $eleLeft1 = d.querySelector(".about-cont-left-el1"), 
$eleLeft2 = d.querySelector(".about-cont-left-el2"), 
$eleLeft3 = d.querySelector(".about-cont-left-el3"), 
$eleRight1 = d.querySelector(".about-cont-right-el1"), 
$eleRight2 = d.querySelector(".about-cont-right-el2"),
$eleRight3 = d.querySelector(".about-cont-right-el3");

export default function observerAbout(){
    
const Change = (enters, observador) => {

    enters.forEach(element => {
        if(element.isIntersecting){
            $eleLeft1.style.transform = "translate(0px)"
            $eleLeft2.style.transform = "translate(0px)"
            $eleLeft3.style.transform = "translate(0px)"
            $eleRight1.style.transform = "translate(0px)"
            $eleRight2.style.transform = "translate(0px)"
            $eleRight3.style.transform = "translate(0px)"
        }else{
            $eleLeft1.style.transform = "translate(-1000px)"
            $eleLeft2.style.transform = "translate(-1000px)"
            $eleLeft3.style.transform = "translate(-1000px)"
            $eleRight1.style.transform = "translate(1000px)"
            $eleRight2.style.transform = "translate(1000px)"
            $eleRight3.style.transform = "translate(1000px)"
        }
        
    });

}

const observador = new IntersectionObserver(Change, {
    root: null,
    rootMargin: '0px 0px 0px 0px',
    threshold: 0.3,   
});

observador.observe($about)
}
