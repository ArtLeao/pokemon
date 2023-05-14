const lua = document.getElementsByClassName("tras")
const sol = document.getElementsByClassName("frente")

lua[0].addEventListener("click", () =>{
    lua[0].style.opacity = "0"
    lua[0].style.zIndex = "0"
    sol[0].style.opacity = "1"
    sol[0].style.zIndex = "1"
    
    document.body.classList.remove("modo_escuro")

    document.body.style.backgroundImage = "url('./src/imagens/eevee.jpg')"

})

sol[0].addEventListener("click", () =>{
    sol[0].style.opacity = "0"
    sol[0].style.zIndex = "0"
    lua[0].style.opacity = "1"
    lua[0].style.zIndex = "1"
    
    document.body.classList.add("modo_escuro")

    document.body.style.backgroundImage = "url('./src/imagens/iniciais.jpg')"

})