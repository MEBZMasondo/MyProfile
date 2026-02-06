// Simple demo contact form handler
document.getElementById('contact-form').addEventListener('submit', function(e){
    e.preventDefault();
    alert('Thanks! This is a demo form. Set up Formspree/Netlify for real submissions.');
    this.reset();
});