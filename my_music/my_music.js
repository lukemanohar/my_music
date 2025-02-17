// Function to scroll to the Piano section when the button is clicked
function scrollToPiano() {
    // Get the Piano section (id="pno")
    const pianoSection = document.getElementById('pno');
    
    // Scroll to the Piano section with smooth scrolling
    pianoSection.scrollIntoView({
        behavior: 'smooth',  // Smooth scrolling effect
        block: 'start'       // Align the section to the top of the viewport
    });
}
