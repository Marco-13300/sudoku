/* --------------------------------------------------------- */
/* PARTIE 1 : LOGIQUE DE L'ŒIL (Exercice précédent)          */
/* --------------------------------------------------------- */
// Note : Le bouton de l'œil n'a pas d'ID, on le cible avec querySelector('button')
// Attention : Comme on a maintenant 2 boutons, querySelector('button') prend le premier trouvé.
// Heureusement, le premier dans le HTML est bien celui de l'œil.
const eyeButton = document.querySelector('button');
const leftEye = document.getElementById('eye-left');

const toggleEye = () => {
    leftEye.classList.toggle('eye-closed');
    if (leftEye.classList.contains('eye-closed')) {
        leftEye.style.backgroundColor = 'black';
        eyeButton.textContent = 'Click to open the left eye';
    } else {
        leftEye.style.backgroundColor = 'red';
        eyeButton.textContent = 'Click to close the left eye';
    }
};

eyeButton.addEventListener('click', toggleEye);

/* --------------------------------------------------------- */
/* PARTIE 2 : LOGIQUE DE LA PAROLE (Nouvel exercice)         */
/* --------------------------------------------------------- */

// 1. Cibler le nouveau bouton par son ID
const speakButton = document.getElementById('speak-button');

// 2. Cibler le torse (là où on va ajouter le texte)
const torso = document.getElementById('torso');

// 3. Fonction pour ajouter le texte
const speak = () => {
    // a. Créer un nouvel élément HTML de type 'div'
    const newWord = document.createElement('div');

    // b. Ajouter le contenu texte "Hello there!"
    newWord.textContent = 'Hello there!';

    // c. Ajouter la classe CSS 'words'
    newWord.className = 'words';

    // d. Insérer (append) ce nouvel élément DANS le torse
    torso.append(newWord);
};

// 4. Ajouter l'écouteur d'événement sur le bouton speak
speakButton.addEventListener('click', speak);