const button = document.querySelector('button');
const leftEye = document.getElementById('eye-left');

const toggleEye = () => {

    leftEye.classList.toggle('eye-closed');

    if (leftEye.classList.contains('eye-closed')) {
        leftEye.style.backgroundColor = 'black';
        button.textContent = 'Click to open the left eye';
    } else {
        leftEye.style.backgroundColor = 'red';
        button.textContent = 'Click to close the left eye';
    }
};

button.addEventListener('click', toggleEye);