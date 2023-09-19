const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
  if (inputBox.value === "") {
    alert("You must write something");
  } else {
    let li = document.createElement("label");
    let div = document.createElement("div");
    li.innerHTML = inputBox.value;
    let checkbox = document.createElement("input");
    checkbox.setAttribute("class", "check");
    checkbox.type = "checkbox";
    div.appendChild(checkbox);
    div.appendChild(li);
    listContainer.appendChild(div);
    li.addEventListener("click", () => {
      li.style.textDecoration = "line-through";
      saveData();
    });
  }
  inputBox.value = "";
  saveData();
}
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
