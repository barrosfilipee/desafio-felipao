const nomeHeroi = "Expurgador";
let experiencia = 7023;
console.log("O Heroi de nome " + nomeHeroi + " está com " + experiencia+" pontos de experiência.");
if(experiencia <= 1000){
    console.log("Seu nivel de XP é Ferro.");
}else if(experiencia > 1000 && experiencia < 2001){
    console.log("Seu nivel de XP é Bronze.");
}else if(experiencia > 2000 && experiencia < 5001){
    console.log("Seu nivel de XP é Prata.");
}else if(experiencia > 5000 && experiencia < 7001){
    console.log("Seu nivel de XP é Ouro.");
}else if(experiencia > 7000 && experiencia < 8001){
    console.log("Seu nivel de XP é Platina.");
}else if(experiencia > 8000 && experiencia < 9001){
    console.log("Seu nivel de XP é Ascendente.");
}else if(experiencia > 9000 && experiencia < 10001){
    console.log("Seu nivel de XP é Imortal.");
}
else{
    console.log("Seu nivel de XP é Radiante.");
}