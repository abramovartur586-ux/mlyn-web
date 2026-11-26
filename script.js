const menuToggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');

menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('active');

    menuToggle.setAttribute('aria-expanded', isOpen);
    menuToggle.textContent = isOpen ? '✕' : '☰';
});

document.querySelectorAll('#navigation a').forEach(link => {
    link.addEventListener('click', () => {
        navigation.classList.remove('active');
        menuToggle.setAttribute('aria-expanded', 'false');
        menuToggle.textContent = '☰';
    });
});