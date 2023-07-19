const addTaskButton = document.getElementById('addTask');

//input
const task = document.getElementById('taskInput');
//list
const taskListOl = document.getElementById('taskList');

addTaskButton.addEventListener('click', addTask);

function addTask(){

const taskName = task.value.trim();
if(taskName){
    const li  = document.createElement('li');
    const buttonDone = document.createElement('button');
    li.innerHTML = `<span>${taskName}</span>`;
    buttonDone.style.color = 'Blue';
    buttonDone.style.marginLeft = '10px';
    buttonDone.style.marginTop = '5px';
    buttonDone.innerHTML = 'Done';
    taskListOl.append(li);
    li.appendChild(buttonDone);

    let flag = true;

    buttonDone.onclick = toDoLine;

    function toDoLine(){
      if (flag){
        crossTask();
      }else{
        crossTask2();
      }
    }
    
    function crossTask() {
      if (flag){

     
    li.style.textDecoration = "line-through";
    flag = false;
    buttonDone.innerHTML = 'Back Changes';
  }
    }

    function crossTask2() {
      if(!flag){
      li.style.textDecoration = "none";
      buttonDone.innerHTML = 'Done';
      flag = true;
    }
    }

}

}

