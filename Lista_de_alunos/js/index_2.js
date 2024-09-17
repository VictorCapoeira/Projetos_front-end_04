;(function(){
    function alunos(nome,notas){
        this.name = nome;
        this.note = notas;
        this.media = function media (){
            let media = null;
            let notas_array = [...this.note];
            media = notas_array.reduce(function(acumulador,atual){
                return acumulador + atual;
            })
            return media/ notas_array.length
        }
    }
    let alunos_dados = [
        new alunos("Isaac",[5,8,9,10]),
        new alunos("Alma",[5,5,6,10]),
        new alunos("Victor",[5,5,2,10]),
    ]
    const btn_adicionar = document.getElementById("btn_adicionar");
    const adicionar_container = document.getElementById("adicionar_container");
    const tr = document.getElementsByTagName("tbody")[0];
    const input_nome = document.getElementById("nome");
    let input_notas = document.getElementsByClassName("input_custom_nota");
    function render(){
        tr.innerHTML= "";
        alunos_dados.map(function(el){
            tr.innerHTML += `<tr> 
                <td>${el.name}</td>
                ${el.note.map(function(e){
                    return `<td>${e}</td>`
                }).join("")}
                ${el.media() >= 6.5 ? `<td style="color: #00ff00">${el.media()}</td>` : `<td style="color: #ff0000">${el.media()}</td>`} 
            </tr>`
        })
    }
    function adicionando_aluno(_nome,_notas){
        alunos_dados.push(
            new alunos(_nome,_notas)
        )
    }
    btn_adicionar.addEventListener("click", function(){
        if(input_nome.value == ""){return alert("Preencha o nome")};
        input_notas = Array.from(input_notas);
        input_notas.map(nota => {
            if(nota.value == ""){ throw new Error(`Por favor, digite todas as nota!`)};
        })
        let valor_notas = input_notas.map(nota => {
            return parseFloat(nota.value)
        })
        adicionando_aluno(input_nome.value,[...valor_notas]);
        render();
    })
    render();
})();