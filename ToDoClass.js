export default class ToDoClass{
    constructor(message){
        this.message = message;
    }

    get getMessage(){
        return this.message;
    }

    addNewMessage(){
        const list = document.getElementById("toDoList");
        const template = document.getElementById("todotemplate");
        const clone = template.content.firstElementChild.cloneNode(true);

        clone.querySelector("p").textContent = this.message;
        const button = clone.querySelector("button");
        console.log()
        
        button.addEventListener("click", this.removeMessage, false);

        list.appendChild(clone);
    }

    removeMessage(e){
        const parent = e.target.parentNode.parentNode.parentNode;
        const child = e.target.parentNode.parentNode;

        parent.removeChild(child);
    }
}