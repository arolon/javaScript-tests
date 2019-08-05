// Mini-Proyecto 2 - Lista de alumnos

// 1.- Crea de un arreglo vacío llamado: lista

let lista = [];


// 2.- Crear las funciones para las tareas a realizar: agregarNuevo(), mostrarLista()
// AÑADIR UN NUEVO ESTUDIANTE
// Crear una función llamada agregarNuevo que solicita un nombre y
// utiliza push para agregar el nombre a la lista
function agregarNuevo() {
    let nuevo = prompt('Introduce lo que vas a agregar: ');
    lista.push(nuevo);
}

// DISPLAY LISTA
// Crear una función llamada mostrarLista que muestra la lista en la consola
function mostrarLista() {
    console.log("La lista es: " + lista);
}

// (OPCIONAL) REMOVER ESTUDIANTE
// Crear una función llamada remove que lleva un nombre
// HINT: Encuentra el nombre del estudiante y su ubicación el arreglo, luego elimina ese nombre de la lista.
// RECURSO: http://stackoverflow.com/questions/5767325/how-to-remove-a-particular-element-from-an-array-in-javascript
function remove(n) {
    let eliminar = prompt('Qué vas a eliminar?');
    for (let i = 0; i < n; i++) {
        if (lista[i] == eliminar) {
            if (i != n - 1) lista[i] = lista[n - 1];
            lista.pop();
        }
    }
}

// 3.- Comienza preguntando si quieren usar la aplicación web (s/n)
// y almacena la respuesta en una variable: iniciar
let iniciar = prompt("Quieres usar esta aplicación? (S/N)").toUpperCase();





// 5.- Escribe una estructura if para evaluar si el usuario quiere o no usar la aplicación web:
if (iniciar == 'S') {
    // 4.- Crea una variable como un string vacío llamada: opcion
    // permitirá almacenar la opcion escrita por el usuario más adelante
    while (iniciar == 'S') {
        let opcion = prompt('Que comando quieres? Agregar/Mostrar/Eliminar/Salir').toLowerCase();
        if (opcion == 'agregar') agregarNuevo();
        else if (opcion == 'mostrar') mostrarLista();
        else if (opcion == 'eliminar') remove(lista.length);
        else if (opcion == 'salir') iniciar = 'N';
        else(alert('Introduce un comando válido (Agregar/Mostrar/Eliminar/Salir)'));
    }
} else if (iniciar == 'N') alert('Vete a la verga!');
//else iniciar = prompt('Introduce un comando válido (S/N)');

// 4.- Dentro del if que creaste en el paso anterior crea un bucle while que requerirá una acción (agregar, mostrar o salir)
// Utiliza if y else if para ejecutar la función correcta para cada opcion.
// El bucle sigue ejecutándose MIENTRAS la opcion sea diferente de: salir