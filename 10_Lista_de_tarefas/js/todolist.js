;(function(){
    "use strict"
    //Adicionando LI
        //Armazenando variaveis que irão compor o processo 

            const itemInput = document.getElementById("item-input");
            // variavel que contem o elemento input item-input

            const todoAddForm = document.getElementById("todo-add")
            // variavel que contem o elemeno form todo-add

            const todoAddItem = document.getElementById("add-item");
            // variavel que contem o elemento imput add-item 

            const ul = document.getElementById("todo-list");
            // variavel que contem o elemento ul todo-list

            const lis = ul.getElementsByTagName("li");
            // variavel que contem os elementos lis dentro da ul todo-list 

        //Armazenando variaveis que irão compor o processo 

        //Disparando eventos para realizar o processo de adição das LI

            let arrTask = [
                // criando array que irá conter todo os objetos que irão compor o LI 
                {
                    // criando objeto que irá conter o li 
                    name: "Task 1",
                    // A propiedade name é o nome do objeto. ela será a propiedade que irá receber o nome direto do input 

                    creatAt: Date.now(),
                    // propiedade creatAt irá conter a hora que o objeto foi criado. na pratica, ele irá informar quando que o elemento li foi criado
                    // o objeto Date.now() retornar em milissegundos a data atual 

                    completed: false
                    // propiedade completed vai ser usada para marcar que se a tarefa foi concluida ou não. o valor padrão é false 
                }
                , {
                    // criando objeto que irá conter o li 
                    name: "Task 2",
                    // A propiedade name é o nome do objeto. ela será a propiedade que irá receber o nome direto do input 

                    creatAt: Date.now(),
                    // propiedade creatAt irá conter a hora que o objeto foi criado. na pratica, ele irá informar quando que o elemento li foi criado
                    // o objeto Date.now() retornar em milissegundos a data atual 

                    completed: true
                    // propiedade completed vai ser usada para marcar que se a tarefa foi concluida ou não. o valor padrão é false 
                }

                // basicamentes, vamos gerar as li a parti desses objetos criados dentro do array
            ]

            // function addEventLi(li){
            //     li.addEventListener("click", function(e){
            //         console.log(this);
            //         // irá retornar o propio elemento 

            //         console.log(this.textContent);
            //         // irá retornar o texto, e irá respeita as quebras de linha, por exemplo 
                    
            //         console.log(this.innerText);
            //         // irá retornar o texto puro, ignorando as quebras de linhas 
                    
            //         console.log(this.innerHTML);
            //         // innerhtml irá retonar somentes os elementos contindos dentro do elemento pai 
                    
            //         console.log(this.outerHTML);
            //         // outerhtml irá retonar os elementos filhos e o elemento pai 
            //     })
            // }
            // função criada para adicioar um listener ao li 

            function generateLiTask(obj){
                const li = document.createElement("li");
                // cirando elemento li 

                const p = document.createElement("p");
                // criando elemento p 

                const checkButton = document.createElement("button");
                // criando elemento button 

                const editButton = document.createElement("i");
                // criando elemento i 

                const deleteButton = document.createElement("i");
                // criando elemento i 

                const containerEdit = document.createElement("div");
                // criando elemento div 

                const inputEdit = document.createElement("input");
                // criando elemento input 

                const containerEditButton = document.createElement("button");
                // criando elemento button 

                const containerCanceltButton = document.createElement("button");
                // criando elemento button 

                li.className = "todo-item";
                // adicionando classe para o li criado 
        
                p.className = "task-name";
                // adicionando classe para o p criado 

                checkButton.className = "button-check";
                // adicionando classe para o button criado 

                editButton.className = "fas fa-edit"
                // adicionando classe para o i criado 

                // deleteButton.className.add("fas fa-trash-alt");
                deleteButton.className = "fas fa-trash-alt";
                // adicionando classe para o i criado 

                containerEdit.className = "editContainer";
                // adicionando classe para o elemento div 

                inputEdit.className = "editInput";
                // adicionando classe para o elemento input 

                containerEditButton.className = "editButton";
                // adicionando classe para o elemento button 

                containerCanceltButton.className = "cancelButton";
                // adicionando classe para o elemento button 

                checkButton.innerHTML = ` <i class="fas fa-check ${obj.completed ? "" : "displayNone"}displayNone" data-actions="checkButton"></i>`
                // adicionando um li dentro do checkButton usando innerHTML 

                p.textContent = obj.name;
                // adicinando conteudo dentro do p criado. basicamente, estamos adicionando o conteudo do parametro dentro do p 

                inputEdit.setAttribute("type", "text");
                // atribuindo atributo type para o elemento input, e definindo o valor do atributo como "text"

                containerEditButton.textContent = "Edit";
                // atribuindo texto para o elemento 

                containerCanceltButton.textContent = "Cancel";
                // atribuindo texto para o elemento

                checkButton.setAttribute("data-actions", "checkButton");
                // atribuindo um atribuito o elemento. esse elemento será usado para trabalhar com o listener 

                editButton.setAttribute("data-actions", "editButton");
                // atribuindo um atribuito o elemento. esse elemento será usado para trabalhar com o listener 

                deleteButton.setAttribute("data-actions", "deleteButton");
                // atribuindo um atribuito o elemento. esse elemento será usado para trabalhar com o listener 
                
                containerEditButton.setAttribute("data-actions", "containerEditButton");
                // atribuindo um atribuito o elemento. esse elemento será usado para trabalhar com o listener 

                containerCanceltButton.setAttribute("data-actions", "containerCanceltButton");
                // atribuindo um atribuito o elemento. esse elemento será usado para trabalhar com o listener 

                li.appendChild(checkButton);
                // adicionando dentro do elemento li o elemento button 

                li.appendChild(p);
                // adicionando dentro do elemento li o elemento p. ou seja, adicinando o p criado dentro do li

                li.appendChild(editButton);
                // adicionando dentro do elemento li o elemento i.

                li.appendChild(deleteButton);
                // adicionando dentro do elemento li o elemento i.

                // ul.appendChild(li);
                // adicionando dentro do elemento ul o elemento li. ou seja, adicinando o li criado dentro do ul

                containerEdit.appendChild(inputEdit);
                // alocando o elemento inputEdit dentro do elemento containerEdit 

                containerEdit.appendChild(containerEditButton);
                // alocando o elemento containerEditButton dentro do elemento containerEdit

                containerEdit.appendChild(containerCanceltButton);
                // alocando o elemento containerCanceltButton dentro do elemento containerEdit

                li.appendChild(containerEdit);
                // adicionando ao li o elemento div criado 

                // addEventLi(li); 
                // adicinando evento para a li 

                inputEdit.value = obj.name;                
                // atribuindo o valor do obj.name para o input. fazemos isso para que quando o valor for se alterado pelo o editButton, ele já preencha o valor base de forma automatica 

                return li
                // retornando a li como resultado da função 
            }
            // a função acima irá criar as lis 

            function renderTasks(){
                ul.innerHTML = "";
                // limpando todo o html previo dentro da ul 
                arrTask.forEach(element => {
                    // realizando um loop dentro do array que contem todos os objetos que são li 
                    
                    ul.appendChild(generateLiTask(element))
                    // adicionando os elementos li dentro do elemento ul 
                });
            }
            // função que irá renderizar(exibir) a nova ul 

            function addTask(task){
                arrTask.push({
                    name: task,
                    creatAt: Date.now(),
                    completed: false
                })
            }
            // criando função que irá adicionar a li criado dentro do array de objetos 

            function clickedUL(e){
                console.log(e.target);
                const dataAction = e.target.getAttribute("data-actions");
                // criando variavel que irá guardar o valor do atributo 

                // if(!dataAction){
                //     return
                // };
                // basicamente, se não houver(valor nulo) o dataAction, ele irá dá um return para cancelar a função
                if(!dataAction) return;
                // é a mesma coisa que acima, só que resumindo codigo  

                let currentLi = e.target;
                // criando variavel que irá conter a li atual 

                while(currentLi.nodeName !== "LI"){
                    // enquanto o currentLi não for um li, o loop será rodado 
                    currentLi = currentLi.parentElement
                    // atribuindo o valor do elemento pai para a variavel 
                }
                // na pratica, isso está sendo feito para sempre termos o controle da li que está sendo cliclada 
               
                const currentLiIndex = [...lis].indexOf(currentLi);
                // variavel que irá resgatar o indice da li dentro da ul 


                const actions = {
                    editButton: function(){
                        const editContainer = currentLi.querySelector(".editContainer");
                        // criando uma variavel que irá conter a div editContainer do li selecionada 

                        [...ul.querySelectorAll(".editContainer")].forEach(container => {
                            // selecionando todos os elementos editContainer que a ul contem 
                            
                            container.removeAttribute("style");
                            // removendo o atributo style de todos os editContainer contindos dentro da ul 
                        })
                        // na pratica, isso está sendo feito para que seja possivel abrir somente um edit por vez. Toda vez que o edit for clicado, ele irá limpar(fechar) qualquer editContainer que esteja com o display flex 

                        editContainer.style.display = "flex";
                        // editando o display, fazendo com que ele seja exibido 

                        currentLi.querySelector(".editInput").focus();
                        // colocando o focus no input para prencher os dados 
                    },
                    deleteButton: function(){
                        arrTask.splice(currentLiIndex, 1);
                        // usando o splice, é possivel remover o elemento desejado dentro do array 
                        
                        renderTasks();
                        // renderizando toda vez que um elemento for excluido
                        
                        // currentLi.remove();
                        // pode-se usar remove para remover o conteudo tbm
                        
                        // currentLi.parentElement.removeChild(currentLi);
                        // pode-se usar o removeChild, e ele ainda é mais cross navegador que o remove

                        // mas qual a diferentra entre o primeiro, o segundo e o terceiro moddo? basicamente, os dois removes, fazem a remoção apenas do elemento visual, não alteram a estrutura de dados...o que nem sempre é interresante 
                    },
                    containerEditButton: function (){
                        const val = currentLi.querySelector(".editInput").value;
                        // criando uma variavel que irá conter o valor do input .editInput 

                        arrTask[currentLiIndex].name = val;
                        // atribuindo o valor do input alterando o valor original contindo dentro do objeto de lis 

                        renderTasks();
                        // renderizando, para que seja exibido as mundanças 
                    },
                    containerCanceltButton: function (){
                        currentLi.querySelector(".editContainer").removeAttribute("style");
                        // removendo o atributo da div. isso, na pratica, irá fechar a janela de edição 

                        currentLi.querySelector(".editInput").value = arrTask[currentLiIndex].name;
                        // fazendo com que o valor sempre permancer o mesmo, toda vez que o edit for cancelado. ou seja, na pratiac, garantimos que o valor visual nunca seja alterado 
                    },
                    checkButton: function(){
                        arrTask[currentLiIndex].completed = !arrTask[currentLiIndex].completed;
                        // invertendo o valor do completed 

                        // if(arrTask[currentLiIndex].completed){
                        //     currentLi.querySelector(".fa-check").classList.remove("displayNone");
                        // } else{
                        //     currentLi.querySelector(".fa-check").classList.add("displayNone");
                        // }
                        // do modo acima, apenas a formatação visual será alterada 

                        renderTasks(); 
                        // a marcação ou não marcação foi feita na criação do propio elemento 
                    }
                }
                // basicamente, um objeto foi criado para conter todas as funçãos que podem ser disparadas pelo o click. 
                if(actions[dataAction]){
                    actions[dataAction]();
                    // basicamente, estamos executando a função baseda no objeto 
                }
            }

            todoAddForm.addEventListener("submit", function(e){
                // adicinando o evento "submit" ao elemento form. basicamente, quando o formulario for enviado(pelo o btn add), ele irá disparar esse evento 

                e.preventDefault();
                // bloqueando a ação normal de envio do formulario para o servidor

                // ul.innerHTML += `
                //     <li class="todo-item">
                //         <p class="task-name">${itemInput.value}</p>
                //     </li>
                // `
                // adicionando li no elemento ul 
                // usando innerHTML no exemplo, não irá resultar o esperado, não é interresante usar iner html, pois usando ele, toda vez que o um li for adicionado, na pratica, ele irá apagar o dom antigo, e sobrescrever com um novo dom, pois é assim que o inner html se comportar. isso, no exemplo, não vai gerar o resultado esperado. pois, será possivel usar o addEventListener no elemento li apenas quando um outro li não for adicionado. depois que o li for criado, ele irá sobrescrever o evento, e fará com que tudo para de funcionar 

                addTask(itemInput.value); 
                // chamando a função e adicionando o parametro 

                renderTasks();
                // atuliando a lista, usando a função criada para isso 

                itemInput.value = "";
                // limpando o valor do input, toda vez que o evento for disparado 
                
                itemInput.focus();
                // redirecionando o focus da pagina para o input itemInput  toda vez que o evento for disparado  
            });

            ul.addEventListener("click", clickedUL);
            // adicionando listerne para a ul 

            // [...lis].forEach(element =>{
                // usando spread operator para transformar os lis em um array. 
                // usando o forEach para percorrer o array 

                // element.addEventListener("click", function(e){
                //     // adicionando um evento para cada li no array 

                //     console.log(this);
                //     // exibindo o propio elemento no console 
                // })

                // addEventLi(element);
                // usando função para adicionar o li 
            // })

        //Disparando eventos para realizar o processo de adição das LI

        renderTasks();
    //Adicionando LI

})()