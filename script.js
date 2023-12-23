import ToDo from "./ToDoClass.js";

const toDoMessages = [];

document.getElementById("form").addEventListener("submit", (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const [message] = [...data.values()];

    const newMessage = new ToDo(message);
    newMessage.addNewMessage();

    const messageObj = {
        id: `${Date.now()}`,
        message: newMessage.getMessage
    };

    toDoMessages.push(messageObj);

    localStorage.setItem("ToDo" ,JSON.stringify(toDoMessages));

}, false)