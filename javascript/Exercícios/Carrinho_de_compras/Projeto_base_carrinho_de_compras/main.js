const inputItem = document.getElementById("input-item"); // Declara uma constante chamada 'inputItem' e atribui a ela o elemento HTML 
// que possui o atributo 'id' com o valor "input-item". Presume-se que este seja um campo de entrada de texto (<input>).

const botaoAdicionar = document.getElementById("adicionar-item"); // Declara uma constante chamada 'botaoAdicionar' e atribui a ela o 
// elemento HTML que possui o atributo 'id' com o valor "adicionar-item". Presume-se que este seja um botão (<button>).

botaoAdicionar.addEventListener("click", (evento) => { // Adiciona um "ouvinte de eventos" (event listener) ao elemento 'botaoAdicionar'. 
// Este ouvinte está configurado para reagir ao evento de "click" (quando o botão é clicado). Quando o evento "click" ocorre, a função 
// anônima (arrow function) especificada como segundo argumento será executada.

    evento.preventDefault(); // Chama o método 'preventDefault()' no objeto 'evento'. Este método impede o 
    // comportamento padrão do evento. Para um botão dentro de um formulário (<form>), o comportamento padrão 
    // seria tentar submeter o formulário, o que esta linha impede.
    
    console.log(inputItem.value); // Usa o método 'console.log()' para exibir no console do navegador o valor 
    // atual da propriedade 'value' do elemento 'inputItem'. Ou seja, ele mostrará o texto que o usuário digitou 
    // no campo de entrada quando o botão for clicado.
});