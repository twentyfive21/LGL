const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarlinks = document.getElementsByClassName('nav-bar-links')[0]

toggleButton.addEventListener('click', () => {
    navbarlinks.classList.toggle('active')
})