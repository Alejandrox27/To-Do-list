import ToDo from "./ToDoClass.js";

let toDoMessages = [];

document.addEventListener("click", (e) => {
    if (e.target.classList[1] === "btn-danger"){
        removeMessage(e);
    }
}, false);

if (localStorage.getItem("ToDo")){
    toDoMessages = JSON.parse(localStorage.getItem("ToDo"));

    toDoMessages.forEach(element => {
        const newMessage = new ToDo(element.message, element.id);
        newMessage.addNewMessage();
    });
}

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const [message] = [...data.values()];

    const newMessage = new ToDo(message);
    newMessage.addNewMessage();

    const messageObj = {
        id: newMessage.getId,
        message: newMessage.getMessage
    };

    toDoMessages.push(messageObj);

    localStorage.setItem("ToDo" ,JSON.stringify(toDoMessages));

}, false)

const removeMessage = (e) => {
    const parent = e.target.parentNode.parentNode.parentNode;
    const child = e.target.parentNode.parentNode;

    const id = e.target.dataset.id;

    parent.removeChild(child);

    toDoMessages.forEach((item, index) => {
        if (item.id === id){
            toDoMessages.splice(index ,1);
            localStorage.setItem("ToDo" ,JSON.stringify(toDoMessages));
        }
    })
}