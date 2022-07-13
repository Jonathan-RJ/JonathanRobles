const d = document;
export  function observerProyectTitle(){
    const  $proyects = d.getElementById("proyect"), $title = d.querySelector(".main-cont-center-proyect"), 
    $title2 = d.querySelector(".main-cont-center-proyect-2"), $mainCont = d.querySelector(".conteiner-main-proyect");
    const Change = (enters, observador) => {
    
        enters.forEach(element => {
            if(element.isIntersecting){
               $title.style.transform = "translateX(0px)";
               $title2.style.transform = "translateX(0px)";
               $mainCont.style.transform = "translateX(0px)";
               
            }else{
                $title.style.transform = "translateX(1500px)";
                $title2.style.transform = "translateX(1500px)";
                $mainCont.style.transform = "translateX(-1500px)";
            }
            
        });
    
    }
    
    const observador = new IntersectionObserver(Change, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.2,   
    });
    
    observador.observe($proyects)
    }

    export function proyectHoverCards(){
        const $contCard = d.querySelectorAll(".cont-proyect-ele1"), $cardHover = d.querySelectorAll(".font-card");
        
        $contCard.forEach(element =>{
            element.addEventListener("mouseover", e =>{
                const dataHover = element.querySelector(".font-card");
                dataHover.style.transform = "translateX(-400px) rotate(100deg)";
            })

            element.addEventListener("mouseout", e =>{
                const dataHover = element.querySelector(".font-card");
                dataHover.style.transform = "translateX(0px)";
            })
        })
    }