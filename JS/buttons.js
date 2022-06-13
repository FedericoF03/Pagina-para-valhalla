let menu = document.getElementById("prueba");
let see = document.getElementById("navDisplay");

let displayMenu = () =>{ 
    new Promise((resolve, reject) => {
        if (see.style.clipPath != "inset(0px)") resolve(see.style.clipPath = "inset(0 0 0 0)");
        else reject();
    }).catch(()=> see.style.clipPath = null);
    
}

menu.addEventListener("click", displayMenu);