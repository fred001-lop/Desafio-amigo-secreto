// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

//Crear un array para almacenar los nombres
let nombresSecretos = [];

//Implementa una función para agregar amigos

function agregarAmigo(){
    //tomamos el valor del input con id=amigo
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();// trim() quita espacios al inicio y final

    //validamos que el campo no este vacio
    if (nombre === ""){

        alert("Por favor, inserte un nombre");
        return;
    }
    //Actualizar el array de amigos: Si el valor es válido, añadirlo al arreglo que almacena los nombre de amigos usando el método.push().
    nombresSecretos.push(nombre);
    console.log(`Lista de amigos: ${nombresSecretos}`);
    //Limpiar el campo de entrada: Después de añadir el nombre, restablecer el campo de texto a una cadena vacía.
    input.value = "";

    //Actualizar la lista visual en HTML
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = '';//limpiar lista antes de actualizar 

}   

console.log(agregarAmigo);
console.log("nombre");