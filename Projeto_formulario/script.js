(function(){
    const btn_submit = document.getElementsByClassName("btn_submit")[0];
    const user = document.getElementById("user");
    const pass = document.getElementById("pass");
    const erro_mensgem = document.getElementsByClassName("erro_mensgem")[0];
    const erro_input = document.getElementById("erro_input");
    const erro_mensagem_text = document.getElementsByClassName("erro_mensagem_text")[0];
    btn_submit.addEventListener("click", function(e){
        if(user.value == "" || pass.value == ""){
            e.preventDefault();
            erro_mensgem.classList.remove("display_none");
            erro_mensgem.classList.add("display_flex");  
            if(user.value == ""){
                erro_mensagem_text.innerHTML = "Por favor, adicione o usuario!";
            }else if(pass.value == ""){
                erro_mensagem_text.innerHTML = "Por favor, adicione a senha!";
            }
        }
    });
    erro_input.addEventListener("click", function(e){
        erro_mensgem.classList.remove("display_flex");
        erro_mensgem.classList.add("display_none");
    });
})()