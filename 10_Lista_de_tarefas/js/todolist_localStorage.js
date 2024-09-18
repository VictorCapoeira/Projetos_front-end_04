;(function(){
    "use strict"

            const itemInput = document.getElementById("item-input");

            const todoAddForm = document.getElementById("todo-add")

            const todoAddItem = document.getElementById("add-item");

            const ul = document.getElementById("todo-list");

            const lis = ul.getElementsByTagName("li");



            let arrTask =  getSavedData();
            // criando variavelq que irá conter os dados para se montar objeto. Basicamente, está sendo criando uma função que recebe o valor de uma função que retornar os dados capturados. Desse modo, é possivel trabalhar com o localStorage 

            function getSavedData(){
                let taskData = localStorage.getItem("tasks")
                // usa-se o localStorage.getItem para pegar o item que foi setado dentro do localStorage. usa-se a chave criad para pegar os elementos criados como referencia 

                taskData = JSON.parse(taskData)
                // convertendo os elementos(que viraram strings), para objetos. Assim, será possivel trabalhar normalmente. 
                // basicamente, vc converte os dados quando vc inseri eles dentro do localStorage, mas quando você de fato vai trabalhar com eles, pode converter eles novamente 

                return taskData && taskData.length ? taskData : [
                    // usando o return fazendo uma pergunta: se o taskData não estiver vazio e não for nulo, ele irá retornar as tasks guardads dentro do taskData, mas se ele estiver vazio e nulo, ele irá retornar o array chumbado 
                    {
                        name: "Task 1",
    
                        creatAt: Date.now(),
    
                        completed: false
                    }
                    , {
                        name: "Task 2",
    
                        creatAt: Date.now(),
    
                        completed: true
                    }
    
                ]
            };
            // função que irá construir o conteudo do objeto 

            function setNewData(){
                localStorage.setItem("tasks", JSON.stringify(arrTask));
                // usa-se o localStorage.setItem para definir um novo item salvo dentro do localStorage. ou seja, usamos para salvar um valor dentro do localStorage. 
                // o primeiro parametro é um parametro qualquer, que é usado apenas para nomear 
                // já o segundo parametro, são os dados
                // porem, o localStorage.setItem tranformas os itemns salvos em string, por isso, é importante o programador tranforma os dados em string, do que deixar transformar de forma automatica, pois pode gerar um erro ou resultado indesejado 
                // usando JSON.stringify é possivel transforma arrays em strings, sem que seu conteudo seja prejudicado 
            }
            // basicamente, foi criada a função que irá de fato atribuir novos element
            setNewData();
            // executando a função 

            function generateLiTask(obj){
                const li = document.createElement("li");

                const p = document.createElement("p");


                const checkButton = document.createElement("button");
                 

                const editButton = document.createElement("i");


                const deleteButton = document.createElement("i");


                const containerEdit = document.createElement("div");
        

                const inputEdit = document.createElement("input");

                const containerEditButton = document.createElement("button");

                const containerCanceltButton = document.createElement("button");

                li.className = "todo-item";
        
                p.className = "task-name";

                checkButton.className = "button-check";

                editButton.className = "fas fa-edit"

                deleteButton.className = "fas fa-trash-alt";

                containerEdit.className = "editContainer";

                inputEdit.className = "editInput";

                containerEditButton.className = "editButton";

                containerCanceltButton.className = "cancelButton";

                checkButton.innerHTML = ` <i class="fas fa-check ${obj.completed ? "" : "displayNone"}displayNone" data-actions="checkButton"></i>`

                p.textContent = obj.name;

                inputEdit.setAttribute("type", "text");

                containerEditButton.textContent = "Edit";

                containerCanceltButton.textContent = "Cancel";

                checkButton.setAttribute("data-actions", "checkButton");

                editButton.setAttribute("data-actions", "editButton");

                deleteButton.setAttribute("data-actions", "deleteButton");
                
                containerEditButton.setAttribute("data-actions", "containerEditButton");

                containerCanceltButton.setAttribute("data-actions", "containerCanceltButton");

                li.appendChild(checkButton);

                li.appendChild(p);
              

                li.appendChild(editButton);
              

                li.appendChild(deleteButton);
               

                containerEdit.appendChild(inputEdit);

                containerEdit.appendChild(containerEditButton);

                containerEdit.appendChild(containerCanceltButton);

                li.appendChild(containerEdit);
               
                inputEdit.value = obj.name;                

                return li
            }

            function renderTasks(){
                ul.innerHTML = "";
                arrTask.forEach(element => {
                    
                    ul.appendChild(generateLiTask(element))
                });
            }

            function addTask(task){
                arrTask.push({
                    name: task,
                    creatAt: Date.now(),
                    completed: false
                })
                setNewData();
                // executando a função criada 
            }

            function clickedUL(e){
                console.log(e.target);
                const dataAction = e.target.getAttribute("data-actions");

                if(!dataAction) return;

                let currentLi = e.target;

                while(currentLi.nodeName !== "LI"){
                    currentLi = currentLi.parentElement
                }
               
                const currentLiIndex = [...lis].indexOf(currentLi);


                const actions = {
                    editButton: function(){
                        const editContainer = currentLi.querySelector(".editContainer");

                        [...ul.querySelectorAll(".editContainer")].forEach(container => {
                            
                            container.removeAttribute("style");
                        })

                        editContainer.style.display = "flex";

                        currentLi.querySelector(".editInput").focus();
                    },
                    deleteButton: function(){
                        arrTask.splice(currentLiIndex, 1);
                        renderTasks();
                        setNewData();
                    // executando a função criada 
                        


                    },
                    containerEditButton: function (){
                        const val = currentLi.querySelector(".editInput").value;

                        arrTask[currentLiIndex].name = val;

                        renderTasks();
                        setNewData();
                        // executando a função criada

                    },
                    containerCanceltButton: function (){
                        currentLi.querySelector(".editContainer").removeAttribute("style");

                        currentLi.querySelector(".editInput").value = arrTask[currentLiIndex].name;
                    },
                    checkButton: function(){
                        arrTask[currentLiIndex].completed = !arrTask[currentLiIndex].completed;
             
                        renderTasks(); 
                        setNewData();
                        // executando a função criada

                    }
                }
                if(actions[dataAction]){
                    actions[dataAction]();
                }
            }

            todoAddForm.addEventListener("submit", function(e){

                e.preventDefault();
       

                addTask(itemInput.value); 

                renderTasks();

                itemInput.value = "";
              
                
                itemInput.focus();
              
            });

            ul.addEventListener("click", clickedUL);
    
        renderTasks();

})()