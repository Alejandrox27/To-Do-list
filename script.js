import ToDo from "./ToDoClass.js";

let toDoMessages = [];

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