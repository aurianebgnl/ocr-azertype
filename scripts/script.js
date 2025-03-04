

function afficherProposition (afficherMot) {
    let divProposition = document.querySelector(".zoneProposition");
    divProposition.innerText = afficherMot;
}

function afficherResultat(score, nbPropositions) {
    let spanScore = document.querySelector(".zoneScore span")
    spanScore.innerText= `${score} / ${nbPropositions}`
    console.log('Votre score est de ' + score + ' sur ' + nbPropositions)
}

function lancerJeu () {
    let i = 0;
    let score = 0;
    let listeProposition = listeMots;
    
    let btnValiderMot = document.querySelector("#btnValiderMot");
    let inputEcriture = document.querySelector("#inputEcriture");
    let listeRadioOptions = document.querySelectorAll('.optionSource input')

    // choixInitial();
    afficherProposition(listeProposition[i]);
    afficherResultat(score, i);

    btnValiderMot.addEventListener('click', () => {
        
        if (inputEcriture.value === listeProposition[i]) {
            score++
        };
        i ++;
        afficherResultat(score, i);
        inputEcriture.value = "";
        
        if (i < listeProposition.length){
            afficherProposition(listeProposition[i])
            
        } else {
            afficherProposition("Le jeu est terminé !");
            btnValiderMot.disabled = true;
           
        } 
        
        afficherResultat(score, i);

    });

    for (let index = 0;index < listeRadioOptions.length; index++) {
        listeRadioOptions[index].addEventListener('change', (event) => {
            // pour lire la valeur du bouton selectionné 
            console.log(event.target.value)
            if (event.target.value === 1) {
                listeProposition = listeMots
            } else {
                listeProposition = listePhrases
            }
            afficherProposition(listeProposition[i])
        })
    
    }
}