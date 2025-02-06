function afficherResultat(score, nbEssais) {
    let message = 'Votre score est de ' + score + ' sur ' + nbEssais
    return message
    }

function choisirPhrasesOuMots() {
    let monChoix = prompt("Veuillez choisir la liste : phrases ou mots ?", "\"phrases\" ou \"mots\"")
    while (monChoix !== "phrases" && monChoix !== "mots") {
        monChoix = prompt("Veuillez choisir la liste : phrases ou mots ?", "\"phrases\" ou \"mots\"")
        }
    return monChoix
    }
    
function lancerBoucleDeJeu (liste, monScore) {
    for (let i = 0; i < liste.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + liste[i])
        if (motUtilisateur === liste[i]) {
            monScore ++
            mesEssais ++
            console.log(afficherResultat(monScore,mesEssais))
        }
    }
}

const listeMots = ['Pétunia', 'Cachalot', 'Bourbouze']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']

let monScore = 0
let mesEssais = 0


if (choisirPhrasesOuMots() === "mots" ) {
    lancerBoucleDeJeu(listeMots,monScore)
} else { 
    lancerBoucleDeJeu(listePhrases,monScore)
}
