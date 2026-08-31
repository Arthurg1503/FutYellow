const jogos = [
    {
        casa    : "Brasil",
        versus  : "VS",
        fora    : "Polonia",
        horario : "16:00", 
        
    },

    {
        casa    : "Congo",
        versus  : "VS",
        fora    : "Espanha",
        horario : "12:00",


    },


    {
        casa    : "França",
        versus  : "VS",
        fora    : "Itália",
        horario : "19:00",


    },

    {
        casa    : "Portugal",
        versus  : "VS",
        fora    : "EUA",
        horario : "22:00",


    },
];

let jogoatual = 0;

function mostrarjogo() {

    const bloco = document.querySelector(".bloco_jogos");

    const jogo = jogos[jogoatual];

    bloco.innerHTML = ` 
    <div class="partida">

    <h3 class="casa">${jogo.casa}</h3>

    <h3 class="versus">${jogo.versus}</h3>

    <h3 class="fora">${jogo.fora}</h3>
    
 

    <div class="horario">Às ${jogo.horario}</div>
    
    </div>
    `;

    jogoatual++;   
    
    if (jogoatual >= jogos.length) {
        jogoatual = 0;
    }
}


mostrarjogo();


setInterval(mostrarjogo, 5000);
