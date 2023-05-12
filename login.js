function login(){
    var user, pass;

    user = document.getElementById("usuario").value;
    pass = document.getElementById("contraseña").value;

    if(user == "45034700" && pass == "liheu990203"){

        window.location = "pag.html";
    }else{"datos incorrectos"}
}