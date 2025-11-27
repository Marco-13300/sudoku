const lifeSwitch = document.getElementById('life-switch-ball'); 
const torso = document.getElementById('torso');
const eyeContainer = document.getElementById('eye-container'); 

function toggleLife() {
    
    lifeSwitch.classList.toggle('switch-on');

    eyeContainer.classList.toggle('eye-open');
    eyeContainer.classList.toggle('eye-closed'); 

    if (lifeSwitch.classList.contains('switch-on')) {
        torso.style.transform = 'translateY(-10px)'; 
        torso.style.boxShadow = '0 0 15px rgba(255, 255, 255, 0.5)';
    } else {
        torso.style.transform = 'translateY(0)';
        torso.style.boxShadow = 'none';
    }
}

lifeSwitch.addEventListener('click', toggleLife);
