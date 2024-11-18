const perguntasERespostas = document.querySelectorAll('.pergunta');

perguntasERespostas.forEach(function(pergunta){
    pergunta.addEventListener("click", function(){
        const perguntaAtual = document.querySelector(".ativo");
        if(perguntaAtual){
            perguntaAtual.classList.remove("ativo");
        }
        pergunta.classList.add("ativo");
    })
});