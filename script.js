window.addEventListener("load",()=>{
    const form = document.querySelector("#new-task-form");
    const  input = document.querySelector("#new-task-input");
    const listElement = document.querySelector("#tasks");

    form.addEventListener("submit",e=>{
        e.preventDefault();
        // console.log(e.target);


        const task = input.value;

        const taskElement = document.createElement("div");
        taskElement.classList.add("task");

        const taskContent =  document.createElement("div");
        taskContent.classList.add("content");
        

        taskElement.append(taskContent);

        const taskInput = document.createElement("input");
        taskInput.classList.add("text1");
        taskInput.type = "text";
        taskInput.value = task;
        taskInput.setAttribute("readonly","readonly");

        taskContent.append(taskInput);


        const taskAction = document.createElement("div");
        taskAction.classList.add("actions");

        const taskEdit = document.createElement("i");
        taskEdit.classList.add("bx");
        taskEdit.classList.add("bx-pencil");


        taskDelete = document.createElement("i");
        taskDelete.classList.add("bx");
        taskDelete.classList.add("bx-trash");

        taskAction.append(taskEdit);
        taskAction.append(taskDelete);

        taskElement.append(taskAction);

        listElement.append(taskElement);

        input.value = "";

        taskEdit.addEventListener("click", e =>{

            if (taskEdit.classList.contains("bx-pencil")) {
                taskEdit.classList.replace("bx-pencil","bx-save");
                taskInput.removeAttribute("readonly");
                taskInput.focus(); //Fokuslanma
            
            }
            else{
                taskEdit.classList.contains("bx-save");
                taskEdit.classList.replace("bx-save","bx-pencil");
                taskInput.setAttribute("readonly","readonly");
                
                
            }
        });

        taskDelete.addEventListener("click", e => {
            taskElement.remove();
        });


        

    })
})