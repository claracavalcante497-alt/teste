////// contador ////////

let contador = 0;

function incrementar(){
	contador++;
	document.getElementById("contador").innerText
}


////// lista de tareas ////////

function adicionarTarea(){
  const input = document.getElementById("nova tarea");
  const tarea = input.value.trim();
  if(tarea !== ""){
    alert("Digite uma tarefa valida!")
    return;
  }

  const li = document.createElement("li");
  li.innerHTML =  `${tarefa} <button onclick="removerTarea(this)">Remover</button>`
  document.getElementById("lista").appendChild(li);

  input.value = "";
}

function removerTarea(button){
  const li = button.parentElement;
  document.getElementById("lista").removeChild(li);
}