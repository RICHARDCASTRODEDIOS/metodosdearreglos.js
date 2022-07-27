const notas = [
    {
        id:1,
        tarea:"Salir a trotar",
        completado: false
    },


    {
        id:2,
        tarea: "Darle comida a mis perros",
        completado: false
    },


    {
        id:3,
        tarea: "Desayunar",
        completado: false
    }

]

const btnAgregar = document.querySelector("#btnagregar");
const sumarTareas = document.querySelector("#sumarTareas");
const notasRealizadas = document.querySelector("#notasRealizadas");
const resumenTareas = document.querySelector("#resumenTareas");

const limpiar = () => (resumenTareas.innerHTML = "");

const mostrarTareas = function (todoList = notas) {
    limpiar();

    // for (let notes of todoList) {

       let tbody = "" ;
       for (let notes of todoList) {
        tbody += `

    <tr>
    <td>${notes.id}</td>
    <td>${notes.tarea}</td>
    <td><Input class="form-check-input" onclick="realizar(${notes.id})" 
    ${notes.completado ? "checked" : ""} 
    type="checkbox" value="" id="check"></td>
    <td><button onclick="eliminar(${notes.id})">x</button></td>
    </tr>
        
    `;
    
    }

    resumenTareas.innerHTML = tbody;
    sumarTareas.innerHTML = notas.length
    const realizadas = notas.filter((notes) => notes.completado === true);
    notasRealizadas.innerHTML = realizadas.length;
}

mostrarTareas();

function realizar(id) {
    notas.map((ele)=> {if (ele.id == id) ele.completado = !ele.completado});
    mostrarTareas()
}
 
btnAgregar.addEventListener("click", () => {
    const nuevaTarea = tareaInput.value;
    notas.push({id: Math.floor(Math.random() * 100), tarea: nuevaTarea, completado: false});
    tareaInput.value = "";

    mostrarTareas();
});

function eliminar(id){
    const index = notas.findIndex((tarea) => tarea.id == id);
    notas.splice(index, 1);

    mostrarTareas();
}



