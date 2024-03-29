export default class ToDoClass{
    #id = `${Date.now()}`
    constructor(message, id= this.#id){
        this.#id = id
        this.message = message;
    }

    get getMessage(){
        return this.message;
    }

    get getId(){
        return this.#id;
    }

    addNewMessage(){
        const list = document.getElementById("toDoList");
        const template = document.getElementById("todotemplate");
        const clone = template.content.firstElementChild.cloneNode(true);

        clone.querySelector("p").textContent = this.message;
        const button = clone.querySelector("button");
        button.dataset.id = this.#id;

        list.appendChild(clone);
    }
}