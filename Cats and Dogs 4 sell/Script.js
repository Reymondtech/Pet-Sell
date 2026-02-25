//CART FUNCTIONALITY
const cartDisplay = document.getElementById('cartCount');
const buyButtons = document.querySelectorAll('.buy-btn');

buyButtons.forEach(button => {
    button.addEventListener('click', () => {
       cartCount ++;
        cartDisplay.textContent = cartCount;
        alert("Pet added to cart  ");
    });
});

// POPUP CONTACT FORM
const modal = document.getElementById('contactModal');
const contactBtn = document.getElementById('contactBtn');
const closeBtn = document.querySelector('.close');

contactBtn.onclick = function() {
    modal.style.display = "block";
}

closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

//FORM SUBMIT
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for contacting us! We will get back to you soon.');
    modal.style.display = "none";

})