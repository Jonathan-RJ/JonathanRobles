const d = document, $contact = d.getElementById("contact"), $form = d.querySelector(".form-contact-content"),
$title = d.querySelector(".contact-title");

export default function observerContact(){
    const Change = (enters, observador) => {
    
        enters.forEach(element => {
            if(element.isIntersecting){
               $form.style.transform = "translateY(0px)";
               $title.style.transform = "translateX(0px)"
               
            }else{
                $form.style.transform = "translateY(600px)";
                $title.style.transform = "translateX(200px)"
            }
            
        });
    
    }
    
    const observador = new IntersectionObserver(Change, {
        root: null,
        rootMargin: '0px 0px 0px 0px',
        threshold: 0.3,   
    });
    
    observador.observe($contact)
    }