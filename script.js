// DOM Content Loaded event
document.addEventListener('DOMContentLoaded', function() {
    // 1. Change text content dynamically
    const heading = document.getElementById('main-heading');
    heading.textContent = 'Interactive JavaScript Portfolio';
    
    // 2. Modify CSS styles via JavaScript
    const styleChanger = document.getElementById('style-changer');
    styleChanger.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
    });
    
    // 3. Add/remove element when button is clicked
    const toggleBtn = document.getElementById('toggle-element');
    const specialMessage = document.getElementById('special-message');
    
    toggleBtn.addEventListener('click', function() {
        specialMessage.classList.toggle('hidden');
    });
    
    // Update copyright year dynamically
    document.getElementById('year').textContent = new Date().getFullYear();
    
    // Additional demonstration of DOM manipulation
    const introText = document.getElementById('intro-text');
    setTimeout(() => {
        introText.textContent = 'Try clicking the buttons below to see JavaScript in action!';
    }, 3000);
});
