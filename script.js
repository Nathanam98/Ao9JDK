// Array de imagens para o banner rotativo
var images = ['fotos/1.jpg', 'fotos/2.jpg', 'fotos/3.jpg', 'fotos/4.jpg', 'fotos/5.jpg'];

// Índice da imagem atual
var currentIndex = 0;

// Função para alternar as imagens do banner
function rotateBanner() {
    // Incrementa o índice da imagem atual
    currentIndex++;

    // Verifica se o índice ultrapassou o comprimento do array de imagens
    if (currentIndex >= images.length) {
        currentIndex = 0; // Volta ao início do array
    }

    // Cria um novo elemento de imagem
    var newImage = new Image();

    // Define o atributo src com a próxima imagem no array
    newImage.src = images[currentIndex];

    // Adiciona um evento load para garantir que a imagem seja carregada corretamente antes de aplicar a transição
    newImage.onload = function() {
        // Atualiza a imagem do banner com a próxima imagem no array
        var bannerImg = document.querySelector('.banner-img');
        bannerImg.src = newImage.src;

        // Move a imagem do banner da direita para a esquerda
        bannerImg.style.left = '0';

        // Força o navegador a repintar antes de aplicar a transição
        bannerImg.offsetWidth;

        // Ativa a transição para deslizar da direita para a esquerda
        bannerImg.style.left = '-100%';
    };

    // Agende a próxima rotação após 3 segundos (3000 milissegundos)
    setTimeout(rotateBanner, 3000);
}

// Inicia a rotação do banner
rotateBanner();

// Função para mostrar detalhes de um pacote
function detalhesPacote(numero) {
    // Redireciona para a tela2.html e passa o número do pacote como parâmetro
    window.location.href = "tela2.html?pacote=" + numero;
}

// Navegar para a tela de login ao clicar em "Comprar"
function comprarPacote() {
    // Aqui você pode redirecionar para a tela de login
    console.log("Redirecionando para a tela de login...");
    window.location.href = "tela_login.html"; // Substitua "tela_login.html" pelo nome do seu arquivo de tela de login
}

// Navegar para a tela de cadastro ao clicar em "Criar conta"
function criarConta() {
    // Aqui você pode redirecionar para a tela de cadastro
    console.log("Redirecionando para a tela de cadastro...");
    window.location.href = "tela_cadastro.html"; // Substitua "tela_cadastro.html" pelo nome do seu arquivo de tela de cadastro
}

// Navegar para a tela de informações de pagamento ao clicar em "Salvar"
function salvarCadastro() {
    // Aqui você pode redirecionar para a tela de informações de pagamento
    console.log("Redirecionando para a tela de informações de pagamento...");
    window.location.href = "tela_pagamento.html"; // Substitua "tela_pagamento.html" pelo nome do seu arquivo de tela de pagamento
}

// Navegar para a tela de finalização da compra ao clicar em "Finalizar"
function finalizarCompra() {
    // Aqui você pode redirecionar para a tela de finalização da compra
    console.log("Redirecionando para a tela de finalização da compra...");
    window.location.href = "tela_finalizacao.html"; // Substitua "tela_finalizacao.html" pelo nome do seu arquivo de tela de finalização da compra
}
