import ToDo from "./ToDoClass.js";

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const newMessage = new ToDo("Hola mundo");
    newMessage.addNewMessage()
}, false)