function addItem(event){
    event.preventDefault ()
    let id= Math.floor(Math.random() * 10000);
    let inputDiv=document.getElementById("input-feild")
    let value=inputDiv.value;
    let parentDiv=document.getElementById("append-todo")
    if(value!=''){
    parentDiv.innerHTML=parentDiv.innerHTML+`<div id="parent-div-${id}" class="row justify-content-center parent-todo-list mt-2">
        <input id="input-feild-${id}" class="input-box p-1" value='${value}' readonly>
        <button class="edit-button" style="margin-top: 6px;" id="edit-button-${id}" onclick="editItem(event,${id})"><i class="fa-solid fa-pen-to-square"></i></button>
        <button style="margin-top: 6px; display:none" class="save-button" style="margin-top: 6px;" id="save-button-${id}" onclick="saveItem(event,${id})"><i class="fa-sharp fa-solid fa-check"></i></button>
        <button class="trash-button" style="margin-top: 6px;"id="trash-button-${id}" onclick="deleteItem(event,${id})" ><i class="fas fa-trash"></i></button>
        </div>`
    }
    inputDiv.value=""
}

function deleteItem(event,id){
    event.preventDefault ()
    document.getElementById(`parent-div-${id}`).remove()
}

function editItem(event,id){
    event.preventDefault ()
    document.getElementById(`edit-button-${id}`).style.display="none"
    document.getElementById(`save-button-${id}`).style.display="inline-block"
    document.getElementById(`input-feild-${id}`).removeAttribute('readonly');
}

function saveItem(event,id){
    event.preventDefault ()
    let temp=document.getElementById(`input-feild-${id}`).value;
    document.getElementById(`input-feild-${id}`).defaultValue=temp;  
    document.getElementById(`save-button-${id}`).style.display="none"
    document.getElementById(`edit-button-${id}`).style.display="inline-block"
    document.getElementById(`input-feild-${id}`).setAttribute('readonly', true);
}