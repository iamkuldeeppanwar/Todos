var enter = document.getElementById("btn");
var ul = document.querySelector("ul");
var input = document.getElementById("Item");

function createlistitem(){
var li = document.createElement("li");
li.appendChild(document.createTextNode(input.value));
ul.appendChild(li);
input.value="";
var dBtn = document.createElement("button");
dBtn.appendChild(document.createTextNode("X"));
li.appendChild(dBtn);
dBtn.addEventListener("click", deleteListItem);
function deleteListItem(){
        li.classList.add("delete");
 }
}
function inputLength(){
return input.value.length;
}
function addListAfterClick(){
if (inputLength() > 0) { 
        createlistitem();
}
}
enter.addEventListener("click",addListAfterClick);


