const hadleDeleteTask=(event)=>{
    const element=event.target.parentNode;
    console.log(element);
    element.remove();
}
const hadleSubmit=(event)=>{
    event.preventDefault();
    
    const taskInput=document.getElementById('task_input');
    if(taskInput.value=="")
        return;
    const parentElem=document.createElement('div')
    const taskText=document.createElement('p');
    const btnDelete=document.createElement('button');
    const tasksContainer=document.getElementById('tasks');
    taskText.innerText=taskInput.value;
    btnDelete.innerText="Delete";
    btnDelete.setAttribute('id','btn_delete');
    parentElem.classList.add('d-flex');
    parentElem.appendChild(taskText);
    parentElem.appendChild(btnDelete);
    tasksContainer.appendChild(parentElem);
    btnDelete.addEventListener('click',hadleDeleteTask);
    taskInput.value="";
    // console.log(parentElem);  
    // console.log(parentElem);
}
const form=document.querySelector('#myForm');
form.addEventListener('submit',hadleSubmit);