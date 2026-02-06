
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask(){
    const text = inputBox.value.trim();
    if(!text){
        alert("You must write something!");
        return;
    }

    let li = document.createElement("li");
    li.textContent = text; 
    let span = document.createElement("span");
    span.textContent = "\u00d7";
    li.appendChild(span);
    listContainer.appendChild(li);

    inputBox.value = "";
    saveData();
}
    
listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function showTask(){
    const data = localStorage.getItem("data");
    listContainer.innerHTML = data ? data : "";

    Array.from(listContainer.querySelectorAll("li")).forEach(li => {
        if(!li.querySelector("span")){
            const span = document.createElement("span");
            span.textContent = "\u00d7";
            li.appendChild(span);
        }
    });
}
showTask();
