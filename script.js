let canvas = document.getElementById("snake");
let context = canvas.getContext("2d");
let box = 32;
// criando a cobrinha
let snake = [];
snake [0] ={
    x: 8 * box,
    y: 8 * box
}

let direction = "right";
let food = {
    x: Math.floor(Math.random() * 15 + 1) * box,
    y: Math.floor(Math.random() * 15 + 1) * box
}

function criarBG(){
    // Fundo do jogo
    context.fillStyle = "lightgreen";
    //Desenhando o tamanho do jogo
    context.fillRect(0, 0 , 16 * box, 16 * box);

}

function criarCobrinha(){
    for (i=0; i < snake.length; i++){
        // Definindo a cor e o tamanho da cobrinha
        context.fillStyle = "blue"
        context.fillRect(snake[i].x, snake[i].y, box, box);
    }
}

//Criando a comidinha
function drawFood(){
    context.fillStyle = "black";
    context.fillRect(food.x, food.y, box, box);
}

//Vai pegar os comandos do click do teclado
document.addEventListener('keydown', update);

function update(event){
    //Definindo as direções da cobrinha
    //37 = Direita
    if(event.keyCode == 37 && direction != "right") direction = "left";
    //38 = baixo
    if(event.keyCode == 38 && direction != "down") direction = "up";
    //39 = esquerda
    if(event.keyCode == 39 && direction != "left") direction = "right";
    //40 = Cima
    if(event.keyCode == 40 && direction != "up") direction = "down";
}

function iniciarJogo(){
    //Definindo os parametros caso a cobrinha passe das laterais do jogo
    if(snake[0].x > 15 * box && direction == "right") snake[0].x = 0;
    if(snake[0].x < 0 && direction == "left") snake[0].x = 16 * box;
    if(snake[0].y > 15 * box && direction == "down") snake[0].y = 0;
    if(snake[0].y< 0 && direction =="up") snake[0].y = 16 * box;


    criarBG();
    criarCobrinha();
    drawFood();

    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    if(direction == "right") snakeX += box;
    if(direction == "left") snakeX -= box;
    if(direction == "up") snakeY -= box;
    if(direction == "down") snakeY += box;

    snake.pop();

    let newHead ={
        x: snakeX,
        y: snakeY
    }

    snake.unshift(newHead);

}

let jogo = setInterval(iniciarJogo, 100);