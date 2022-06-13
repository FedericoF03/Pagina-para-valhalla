let menu = document.getElementById("prueba");
let see = document.getElementById("navDisplay")

let displayMenu = () =>{ 
    new Promise((resolve, reject) => {
        if (see.style.display != "block") resolve (see.style.display = "block");
        else reject(see.style.display = "none");
    })
    
}

menu.addEventListener("click", displayMenu);