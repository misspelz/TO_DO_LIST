// window.addEventListener("load", ()=>{
    // get the username input
    let nameInput = document.querySelector("#name-input")
    // console.log(nameInput)

    nameInput.addEventListener("input", (e)=>{
        localStorage.setItem("name", e.target.value)
    })

    let name = localStorage.getItem("name")
    nameInput.value = name

    // todo local storage

    // ================================
    const form = document.querySelector("#new-todo-form")

    // const input = document.querySelector("#content")

    const list = document.querySelector(".list")

    // console.log(form)
    form.addEventListener("submit", (e)=>{
        e.preventDefault()
        // this stops it from refreshing the page

        const input = document.querySelector("#content")

        const task = input.value
        // console.log(task) 

        if(!task){
            alert("Please, fill out your task")
            return; //we don't want anything else to happen
        }

        const taskList = document.createElement("div")

        taskList.innerHTML = `
        <div class="todo-item">
          <div class="todo-content">
            <input type="text" class="todo-input" value=${task} readonly>
          </div>
           
          <div class="actions">
            <button class="edit">Edit</button>
            <button class="delete">Delete</button>
          </div>
        </div>
        `
        list.appendChild(taskList)

        const todoItem = taskList.getElementsByClassName('todo-item')[0]
              todoItem.getElementsByClassName('todo-input')[0].value = task

        // EDIT
        const edit = document.querySelector(".edit")
        edit.addEventListener("click", (e)=>{
            let editBtn = e.target
            // console.log(editBtn)

            const editInput = document.querySelector(".todo-input")
            // console.log(editInput)

            if(editBtn.innerText === "Edit"){
                editInput.removeAttribute("readonly")  
                editInput.focus()
                editBtn.innerText = "Save"
                editBtn.style.backgroundColor = "var(--business)"
            }else{
                editInput.setAttribute("readonly", "readonly")
                editBtn.innerText = "Edit"
                editBtn.style.backgroundColor = "var(--primary)"
            }
        })

        // DELETE
        const deleteBtn = document.querySelector(".delete")
        console.log(deleteBtn)
        
        deleteBtn.addEventListener("click", (e)=>{
            // let delBtn = e.target
            // console.log(delBtn)
            list.remove()
        })

        // localStorage.setItem("tasks", JSON.stringify(taskList))
        
    })

    // localStorage.getItem(JSON.parse("tasks"))
// })
























































// // when the window has loaded, get on with the javascript actions
// // window.addEventListener("load", ()=>{
//     // create a storage that gets the name from the local storage or empty string if no name was inputted
//     const username = localStorage.getItem("username") || ''

//     // create a storage that gets your todos from the local storage or an empty array if there are no todos (without the let or const makes the todos variable available globally)
//     let todos = JSON.parse(localStorage.getItem("todos"))|| []
//     console.log(todos)
    
//     // get the name input and todo form
//     const nameInput = document.querySelector("#name-input")
//     const newToDoForm = document.querySelector("#new-todo-form")

    
//     nameInput.value = username // inputted  

//     nameInput.addEventListener("change", (e)=>{
//         localStorage.setItem("username", e.target.value)
//     })

//     newToDoForm.addEventListener("submit", (e)=>{
//         e.preventDefault()

//         const todo = {
//             content: e.target.elements.content.value,
//             category: e.target.elements.category.value,
//             done: false,
//             createdAt: new Date().getTime()
//         }

//         todos.push(todo)

//         localStorage.setItem("todos", JSON.stringify(todos))

//         e.target.reset()

//         displayToDo()
//     })
//     // displayToDo()
// // })

// // CREATE A FUNCTION TO DISPLAY TODOS
// function displayToDo(){
//     todoList = document.querySelector("#todo-list")

//     // todoList.innerHTML

//     todos.forEach((todo)=>{
//         const todoItem = document.createElement("div")
//         todoItem.classList.add('todo-item')

//         const label = document.createElement("label")
//         const input = document.createElement("input")
//         const span = document.createElement("span")
//         const content = document.createElement("div")
//         const actions = document.createElement("div")
//         const edit = document.createElement("button")
//         const deleteButton = document.createElement("button")

//         input.type = "checkbox"
//         input.checked = todo.done
//         span.classList.add(bubble)

//         if(todo.category == "personal"){
//             span.classList.add("personal")
//         } else(
//             span.classList.add("business")
//         )

//         content.classList.add("todo-content")
//         actions.classList.add("actions")
//         edit.classList.add("edit")
//         deleteButton.classList.add("delete")

//         content.innerHTML = `
//         <input type="text" value="${todo.content}" readonly
//         `
//         edit.innerHTML = "edit"
//         deleteButton.innerHTML = "Delete"

//         label.appendChild(input)
//         label.appendChild(span)
//         actions.appendChild(edit)
//         actions.appendChild(deleteButton)
//         todoItem.appendChild(label)
//         todoItem.appendChild(content)
//         todoItem.appendChild(actions)

//         todoList.appendChild(todoItem)

//         if(todo.done){
//             todoItem.classList.add("done")
//         }

//         let submit = document.getElementById("submit")[0]
//         console.log(submit)

//         submit.addEventListener("click", (e)=>{
//             todo.done = e.target.checked
//             localStorage.setItem(("todos"), JSON.stringify(todos))

//             if(todo.done){
//                 todoItem.classList.add("done")
//             }else{
//                 todoItem.classList.remove("done")
//             }

//             displayToDo()
//         })

//         // EDIT
//         edit.addEventListener("click", (e)=>{
//             const input = content.querySelector("input")
//             input.removeAttribute("readonly")
//             input.focus()
//             input.addEventListener("blur", (e)=>{
//                 input.setAttribute("readonly", true)
//                 todo.content = e.target.value
//                 localStorage.setItem("todos", JSON.stringify("todos"))

//                 displayToDo()
//             })
//         })

//         // DELETE
//         deleteButton.addEventListener("click", (e)=>{
//             todos = todos.filter((t)=> t != todo)
//             localStorage.setItem("todos", JSON.stringify("todos"))

//             displayToDo()
//         })
//     })
// }
