function scrollToPiano() {
    const pianoSection = document.getElementById('pno');
    pianoSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

function toggleHeart(button, countId) {
    button.classList.toggle('liked');
    const countElement = document.getElementById(countId);
    let currentCount = parseInt(countElement.textContent);
    if (button.classList.contains('liked')) {
        currentCount++;
    } else {
        currentCount--;
    }
    countElement.textContent = currentCount;
}

