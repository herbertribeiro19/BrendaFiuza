//Funcão de máquina de escrever
function typeWriter(elemento){
    const textoArray = elemento.innerHTML.split('');
    elemento.innerHTML = '';
    textoArray.forEach((letra, i) => {
        setTimeout(() => elemento.innerHTML += letra, 115 * i);
    });
}
const titulo = document.querySelector('h1');
typeWriter(titulo);

typeWriter(document.querySelector('h2'));