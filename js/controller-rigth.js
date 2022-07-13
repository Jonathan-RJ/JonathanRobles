const d = document, $skill = d.getElementById("skill"), $font = d.querySelector(".skil-font-transition");

export default function observerSkill(){
    
    const Change = (enters, observador) => {
    
        enters.forEach(element => {
            if(element.isIntersecting){
                $font.style.transform = "translate(0px)"
            }else{
                $font.style.transform = "translate(-1500px)"
            }
            
        });
    
    }
    
    const observador = new IntersectionObserver(Change, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.5,   
    });
    
    observador.observe($skill)
    }
    