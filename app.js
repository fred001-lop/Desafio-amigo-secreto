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

    //Iterar sobre el arreglo: Usa un bucle for para recorrer el arreglo amigos y crear elementos de lista (<li>) para cada título.
    for (let i = 0; i<nombresSecretos.length; i++){
        const li = document.createElement('li');
        li.textContent = nombresSecretos[i];
        lista.appendChild(li);
    }
    console.log(`Lista actualizada: ${nombresSecretos}`);

}   


    //Implementa una función para sortear los amigos

    function sortearAmigos(){

        // validar que haya amigos disponibles
        if (nombresSecretos.length === 0){
            alert(`No hay amigos para sortear`);
            return;
        }

        //Generar un indice aleatoria
        const indiceAleatorio = Math.floor(Math.random()* nombresSecretos.length);

        //Obtener el nombre sorteado
        const amigoSorteado = nombresSecretos[indiceAleatorio];

        //mostrar el resultado
        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.innerHTML = `<li>El amigo sorteado es:<strong> ${amigoSorteado}</strong></li>`;
    }

console.log(agregarAmigo);
console.log("nombre");