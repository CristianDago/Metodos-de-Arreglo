// Inicio

const listaDeTareas = document.querySelector("#tareas")
const tareaInput = document.querySelector("#nuevaTarea")
const totalRealizadas = document.querySelector("#totalRealizadas")
const totalTareas = document.querySelector("#totalTareas")
const btnAgregar = document.querySelector("#agregarTarea")
const btnActualizar = document.querySelector("#actualizarTarea")

const tareas = [
    { id: 16, nombre: "Hacer mercado"},
    { id: 60, nombre: "Estudiar para la prueba"},
    { id: 24, nombre: "Sacar a pasear a Tobby"},
    ];
    
let html =""
    for (let tarea of tareas) {
        html += 
            `<tr>
                <td>${tarea.id} </td>
                <td>${tarea.nombre}</td>
                <td><input type="checkbox" class="checkbox"></td>
                <td><button class="boton-rojo" onclick="borrar(${tarea.id})"> x </button></td>
            </tr>`           
            listaDeTareas.innerHTML = html;
            totalTareas.innerHTML = tareas.length; 
 }


// Botón Actualizar 

btnActualizar.addEventListener("click",() => {

const Seleccion = document.querySelectorAll('input[type=checkbox]:checked');

if (Seleccion.value = ""){
    totalRealizadas.innerHTML = 0;
    return;

}else {
    totalRealizadas.innerHTML = Seleccion.length;
}

}) 


 // Botón Agregar 

    btnAgregar.addEventListener("click",() => {

   if(tareaInput.value =='') {

        alert ('Debes agregar una tarea');
       return;

    } else {

    const nuevaTarea = {id: Date.now(), nombre: tareaInput.value}
    tareas.push(nuevaTarea)
    tareaInput.value = ""
    let html =""
    for (let tarea of tareas) {
    html += 
        `<tr>
            <td>${tarea.id} </td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" class="checkbox"></td>
            <td><button class="boton-rojo" onclick="borrar(${tarea.id})"> x </button></td>
        </tr>`
  }
    listaDeTareas.innerHTML = html;
    totalTareas.innerHTML = tareas.length;
    totalRealizadas.innerHTML = 0;
}

})  


// Borrar

function borrar(id){
    const index = tareas.findIndex((ele) => ele.id == id)
    tareas.splice(index, 1)
    totalTareas.innerHTML = tareas.length; 
    renderTareas();
    totalRealizadas.innerHTML = 0;
  
}

// Render

    function renderTareas(){
    let html = ""
    for (tarea of tareas) {
    html += 
        `<tr>
            <td>${tarea.id} </td>
            <td>${tarea.nombre}</td>
            <td><input type="checkbox" class="checkbox"></td>
            <td><button class="boton-rojo" onclick="borrar(${tarea.id})"> x </button></td>
        </tr>`
    }
    listaDeTareas.innerHTML = html;
    totalTareas.innerHTML = tareas.length;

} 
   

 