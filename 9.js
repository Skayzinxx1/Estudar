let pokemao = {
    nome: "Mewtwo",
    HP: 247,
    ataque: Math.floor(Math.random() * 3) + 1,
    level: 100,
    vitorias: 0,
    derrotas: 0,
    inicial: {
        HP: 20,
        ataque: Math.floor(Math.random() * 3) + 1,
        level: 1
    }
};

while (true) {
   
    console.log("Escolha uma opção:\n1) Batalhar\n2) Vitorias vs Derrotas\n3) Listar objeto\n4) Sair");
    let opcao = prompt("Escolha uma opção (1, 2, 3, 4):");

    if (opcao === "1") {
    
        let inimigo = {
            nome: "Inimigo",
            HP: Math.floor(Math.random() * 6) + 5,
            ataque: Math.floor(Math.random() * 5),
        };

        let batalha = true;
        let vencedor = "";


        while (batalha) {
            inimigo.HP -= pokemao.ataque;
            if (inimigo.HP <= 0) {
                vencedor = "Pokemão";
                break;
            }

            pokemao.HP -= inimigo.ataque;
            if (pokemao.HP <= 0) {
                vencedor = "Inimigo";
                break;
            }
        }


        if (vencedor === "Pokemão") {
            console.log("Você venceu a batalha!");
            pokemao.vitorias++;
            let upgrade = prompt("Deseja melhorar o HP ou o ataque do seu pokemão? (Digite 'HP' ou 'ataque')");
            if (upgrade === "HP") {
                pokemao.HP += 5;
            } else if (upgrade === "ataque") {
                pokemao.ataque += 1;
            } else {
                console.log("Opção inválida. Nenhum atributo foi modificado.");
            }
        } else {
            console.log("Você perdeu a batalha...");
            pokemao.derrotas++;
        }
        
    } else if (opcao === "2") {
        console.log("Vitórias: " + pokemao.vitorias + " | Derrotas: " + pokemao.derrotas);
    } else if (opcao === "3") {
        console.log("Dados iniciais:");
        console.log("HP: " + pokemao.inicial.HP + "\nAtaque: " + pokemao.inicial.ataque + "\nLevel: " + pokemao.inicial.level);
        console.log("Dados atuais:");
        console.log("HP: " + pokemao.HP + "\nAtaque: " + pokemao.ataque + "\nLevel: " + pokemao.level);
    } else if (opcao === "4") {
        console.log("Saindo...");
        break;
    } else {
        console.log("Opção inválida, tente novamente.");
    }
}