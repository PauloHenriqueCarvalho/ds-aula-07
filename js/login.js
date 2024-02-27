var LoginForm = document.getElementById("LoginForm");
var RegForm = document.getElementById("RegForm");  
var Indicator =  document.getElementById("Indicator");  

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(60px)";
}

function login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(-60px)";
}

function verificacao(){
    let user= document.getElementById("user").value;
    let password= document.getElementById("password").value;


    

    if(user.trim() === "" || password.trim() === ""  ){
        alert("Preencha todos os campos");
    } else {
        window.location.href = "../index.html";
    }
}