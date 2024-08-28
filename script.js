function agregarTarea() {
  let textoDelInput = document.getElementById("inputField").value;
  if (textoDelInput === "") {
    alert("Ingresa una tarea para continuar.");
    return;
  }

  let newTask = document.createElement("li");
  newTask.textContent = textoDelInput;

  newTask.onclick = function () {
    newTask.classList.toggle("completada");
  };

  let eliminarTarea = document.createElement("span");
  eliminarTarea.textContent = "x";
  eliminarTarea.onclick = function (event) {
    event.stopPropagation();
    newTask.remove();
  };

  newTask.appendChild(eliminarTarea);

  document.getElementById("contenido-lista").appendChild(newTask);

  document.getElementById("inputField").value = "";
}
//Hola! Nota de editor 😆 Si por alguna razón el código no funciona como debería, por favor avísenme, estuve dándole unos últimos retoques
//y probé todo, en teoría anda bien, pero por ahí metí un dedazo en algún lado y puede que se haya roto algo, esperemos que no, pero ta!
//Gracias por su atención 😁👍🏻
