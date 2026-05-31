const input = document.getElementById("input");
const btn = document.getElementById("btn");
const list = document.getElementById("list");
const clear = document.getElementById("clear");

const savedata = () =>{
    localStorage.setItem("tasks",list.innerHTML);
};

const showtasks = () =>{
    list.innerHTML = localStorage.getItem("tasks") || "";
}

const addtask = () =>{
    let task = input.value.trim();

    if(task === ""){
        alert("Enter Your Task");
        return;
    }

    let li = document.createElement("li");
    li.textContent = task;

    let span = document.createElement('span');
    span.innerHTML = "\u2715";

    li.appendChild(span);
    list.appendChild(li);

    input.value = "";
    savedata();
};

btn.addEventListener("click",addtask);

list.addEventListener("click", (e) => {
    if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
});


clear.addEventListener('click',()=>{
    localStorage.clear();
    list.innerHTML = "";
});

input.addEventListener('keypress',(e) =>{
    if(e.key ==="Enter"){
        addtask();
    }
})

showtasks();