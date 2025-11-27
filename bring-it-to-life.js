// 1. Sélectionner les éléments HTML
const lifeSwitch = document.getElementById('life-switch');
const torso = document.querySelector('.torso');
const eyeContainer = document.getElementById('eye-container'); 

// 2. Définir la fonction qui gère l'animation
function toggleLife() {
    // 1. Basculer l'interrupteur
    lifeSwitch.classList.toggle('switch-on');

    // 2. Animer l'œil (bascule entre "ouvert" et "fermé")
    // Note: .toggle() ajoute si absent et retire si présent
    eyeContainer.classList.toggle('eye-open');
    eyeContainer.classList.toggle('eye-closed'); 

    // 3. Animation du corps
    if (lifeSwitch.classList.contains('switch-on')) {
        // État "ON"
        torso.style.transform = 'translateY(-10px)'; 
        torso.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    } else {
        // État "OFF"
        torso.style.transform = 'translateY(0)';
        torso.style.boxShadow = 'none';
    }
}

// 3. Ajouter un écouteur d'événement sur le bouton
lifeSwitch.addEventListener('click', toggleLife);