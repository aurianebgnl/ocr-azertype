function afficherResultat(score, nbPropositions) {
    console.log('Votre score est de ' + score + ' sur ' + nbPropositions)
    }

function choisirPhrasesOuMots() {
    let monChoix = prompt('Veuillez choisir la liste : phrases ou mots ?', '"phrases" ou "mots"')
    while (monChoix !== "phrases" && monChoix !== "mots") {
        monChoix = prompt('Vous devez choisir entre "mots" et "phrases"')
        }
    return monChoix
    }
    
function lancerBoucleDeJeu (liste) {
    let monScore = 0
    for (let i = 0; i < liste.length; i++) {
        let motUtilisateur = prompt("Entrez le mot : " + liste[i])
        if (motUtilisateur === liste[i]) {
            monScore++
        }
    }
    return monScore
}

function lancerJeu () {
    let choix = choisirPhrasesOuMots()
    let monScore = 0
    let mesEssais = 0
    if (choix === "mots" ) {
        monScore = lancerBoucleDeJeu(listeMots,monScore)
        mesEssais = listeMots.length
    } else { 
        monScore = lancerBoucleDeJeu(listePhrases,monScore)
        mesEssais = listePhrases.length
    }
    afficherResultat(monScore, mesEssais)
}

const listeMots = ['Pétunia', 'Cachalot', 'Bourbouze']
const listePhrases = ['Bonjour, comment allez-vous ?', 'Salut, ça va ?', 'Coucou, ça va ?']


lancerJeu()