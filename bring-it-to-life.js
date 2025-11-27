// 1. Sélectionner l'élément de la boule de l'interrupteur
const lifeSwitch = document.getElementById('life-switch');

// 2. Écouter le clic sur la boule
lifeSwitch.addEventListener('click', () => {
    // 3. Basculer la classe 'switch-on'
    // La classe 'switch-on' (définie dans le CSS) déplace la boule 
    // et change sa couleur.
    lifeSwitch.classList.toggle('switch-on');

    // --- L'étape optionnelle "Bring-It-To-Life" ---
    // Vous pouvez ici ajouter d'autres actions, par exemple :
    const torso = document.querySelector('.torso');
    if (lifeSwitch.classList.contains('switch-on')) {
        // Ajouter une animation ou un style quand il est "en vie"
        torso.style.transform = 'translateY(-10px)'; // Fait légèrement sauter le corps
        torso.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    } else {
        // Remettre à l'état initial
        torso.style.transform = 'translateY(0)';
        torso.style.boxShadow = 'none';
    }
});