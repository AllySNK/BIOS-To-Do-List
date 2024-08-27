function agregarTarea() {
  let textoDelInput = document.getElementById("inputField").value;
  if (textoDelInput === "") {
    alert("Ingresa una tarea para continuar.");
    return;
  }

  let li = document.createElement("li");
  li.className = "tarea";
  li.textContent = textoDelInput;

  li.onclick = function () {
    li.classList.toggle("completada");
  };

  let eliminarTarea = document.createElement("span");
  eliminarTarea.textContent = "x";
  eliminarTarea.className = "eliminar";
  eliminarTarea.onclick = function (event) {
    event.stopPropagation(); // Evita que el click en el "x" marque como completada la tarea
    li.remove();
  };

  li.appendChild(eliminarTarea);

  document.getElementById("contenido-lista").appendChild(li);

  document.getElementById("inputField").value = "";
}
