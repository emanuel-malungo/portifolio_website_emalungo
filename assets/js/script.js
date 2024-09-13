const logo = document.querySelector('.nav_logo h1');
const logo_color = document.querySelectorAll('.logo_color');

// Função para mudar a cor ao passar o mouse
logo.addEventListener('mouseover', function() {
    logo.style.color = '#FF4B57';
    logo_color.forEach(function(el) {
        el.style.color = '#FCFEFF';
    });
});

// Função para restaurar a cor original ao tirar o mouse
logo.addEventListener('mouseout', function() {
    logo.style.color = ''; 
    logo_color.forEach(function(el) {
        el.style.color = '';
    });
});
