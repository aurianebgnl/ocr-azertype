function afficherResultat(score, nbPropositions) {
    let message = 'Votre score est de ' + score + ' sur ' + nbPropositions
    return message
    }

const listeMots = ['Pétunia', 'Cachalot', 'Bourbouze']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']

let score = 0

let monChoix = prompt("Veuillez choisir la liste : phrases ou mots ?", "\"phrases\" ou \"mots\"")
while (monChoix !== "phrases" && monChoix !== "mots") {
monChoix = prompt("Veuillez choisir la liste : phrases ou mots ?", "\"phrases\" ou \"mots\"")
}

if (monChoix === "mots" ) {
    for (let i = 0; i < listeMots.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + listeMots[i])
        if (motUtilisateur === listeMots[i]) {
            score ++
            console.log(afficherResultat(score,listeMots.length))
        }
    }
} else { 
    for (let i = 0; i < listePhrases.length; i++) {
        let phraseUtilisateur = prompt("Entrez la phrase : " + listePhrases[i])
        if (phraseUtilisateur === listePhrases[i]) {
            score ++
            console.log(afficherResultat(score,listePhrases.length))
        }
    }
    
}









