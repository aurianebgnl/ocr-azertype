
function afficherResultat(score, nbPropositions) {
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.innerText= `${score} / ${nbPropositions}`
    console.log('Votre score est de ' + score + ' sur ' + nbPropositions)
}

function afficherProposition (afficherMot) {
    let divProposition = document.querySelector(".zoneProposition");
    divProposition.innerText = afficherMot;
}

function lancerJeu () {
    let i = 0;
    let score = 0;
    
    let btnValiderMot = document.querySelector("#btnValiderMot");
    let inputEcriture = document.querySelector("#inputEcriture");

    afficherProposition(listeMots[i]);
    afficherResultat(score, i);

    btnValiderMot.addEventListener('click', () => {
        
        if (inputEcriture.value === listeMots[i]) {
            score++
        };
        i ++;
        afficherResultat(score, i);
        inputEcriture.value = "";
        
        if (i < listeMots.length){
            afficherProposition(listeMots[i])
            // console.log(`à taper : ${listeMots[i]}`);
        } else {
            afficherProposition("Le jeu est terminé !");
            btnValiderMot.disabled = true;
            // console.log("c'est fini")
        } 
        
        afficherResultat(score, i);
        
    });

}

