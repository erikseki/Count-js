# Projeto Contador Responsivo 🔥
Este é um contador interativo desenvolvido com **HTML**, **CSS** e **JavaScript**, totalmente **responsivo**, se adaptando a diferentes tamanhos de tela. Ele permite que o usuário aumente, diminua e resete o valor de forma dinâmica.
</br>

![Contador](./src/img/Captura%20de%20tela%202025-02-08%20133522.png)![Contador-Responsivo](./src/img/Captura%20de%20tela%202025-02-08%20133819.png)

</br>

## Vamos ver como funciona o nosso Contador ? 


Inicialmente, a estrutura do Contador consiste em 4 elementos. 
- Plus - Incremento
- init-count - Valor do Contador
- Minus - Decremento
- btn-reset - Button para resetar o contador

Dessa forma, podemos incrementar quando seguramos o **Plus**, decrementar quando seguramos o **Minus** e resetar ao clicar no **"button"**.

</br>

> [!NOTE]
>// setando valor inicial do contador = 0
></br>
>let count = 0;
></br>
>// iniciando o invervalId (intervalo de tempo) vazio
></br>
>let intervalId = '';

### > [*setInterval = setInterval*](https://developer.mozilla.org/en-US/docs/Web/API/Window/clearInterval)
Iniciando o intervalo: Quando você clica nos botões de + ou -, o JavaScript inicia um intervalo com setInterval(). Isso significa que a função dentro do setInterval() vai ser executada repetidamente a cada intervalo de tempo, que no seu caso é a cada 100 milissegundos (0,1 segundo).

Exemplo:

```
intervalId = setInterval(() => {
    count++;
    updateValue();
}, 100);
Aqui, o intervalId armazena o valor retornado pelo setInterval(), que é o ID único do intervalo.
```

### > [*clearInterval*](https://www.devmedia.com.br/javascript-setinterval-executando-funcoes-repetidamente/43491)
Essa linha de código é geralmente usada para parar a execução do intervalo quando o usuário solta o botão do mouse. Ou seja, ela interrompe a contagem contínua (que estava sendo controlada pelo setInterval()) sempre que o usuário solta o botão, garantindo que o contador não continue sendo incrementado ou decrementado indefinidamente.

Exemplo:

```
document.addEventListener('mouseup', () => clearInterval(intervalId));
```
</br>

## Instalando o projeto Contador
Caso você queira acessar esse projeto na sua máquina, siga os próximos passos abaixo utilizando o git.
```
Acessando o git bash cole o comando abaixo.
- git clone https://github.com/erikseki/Count-js.git

Acesse a pasta utilizando o comando "cd"
- cd Count-js

Abra o projeto no vscode (caso utilize outra IDE, verifique a documentação de como abrir)
- code .
```

</br>
</br>

******

> [!TIP]
Se você tiver novas sugestões para aprimorar este projeto, fique à vontade para compartilhá-las e discutir comigo. 




