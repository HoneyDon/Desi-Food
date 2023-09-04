// Get a reference to the button element
const button = document.querySelector('#btn button');

// Add a click event listener to the button
button.addEventListener('click', () => {
    // Scroll to the desired section
    const section = document.querySelector('#cards');
    section.scrollIntoView({ behavior: 'smooth' });
});