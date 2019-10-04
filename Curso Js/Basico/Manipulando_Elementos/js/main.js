function clicou(){
    document.getElementById("agradecimento").innerHTML = "Obrigado por clicar"
    console.log(document.getElementById("agradecimento").innerHTML = "Obrigado por clicar")
}

function redirocionar(){
    window.open("https://mail.google.com/mail/u/0/#inbox") // abre em outra janela
    window.location.href = "https://mail.google.com/mail/u/0/#inbox" // abre na mesma janela
}

function trocar(elemento){
    //document.getElementById("mousemove").innerHTML = "Obrigado por passar o Mouse"
    elemento.innerHTML = "Obrigado por passar o Mouse"
}

function voltar(elemento){
    //document.getElementById("mousemove").innerHTML = "Passe o mouse aqui"
    elemento.innerHTML = "Passe o mouse aqui"

}

function load(){
    alert("Pagina Carregada")
}

function funcaoChange(elemento){
    console.log(elemento.value)
}