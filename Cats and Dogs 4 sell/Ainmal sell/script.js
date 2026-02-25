// CART
let cartCount = 0;
const cartDisplay = document.getElementById("cartCount");

document.querySelectorAll(".buy-btn").forEach(btn => {
    btn.addEventListener("click", () => {
        cartCount++;
        if(cartDisplay) cartDisplay.textContent = cartCount;
        alert("Added to cart 🐾");
    });
});

// CONTACT MODAL
const modal = document.getElementById("contactModal");
if(modal){
    document.getElementById("contactBtn").onclick = () => modal.style.display = "block";
    document.querySelector(".close").onclick = () => modal.style.display = "none";

    window.onclick = (e) => {
        if (e.target == modal) modal.style.display = "none";
    };

    document.getElementById("contactForm").addEventListener("submit", function(e){
        e.preventDefault();
        alert("Message sent successfully!");
        modal.style.display = "none";
    });
}

// DARK MODE
const toggle = document.getElementById("darkModeToggle");
if(toggle){
    toggle.onclick = () => {
        document.body.classList.toggle("dark-mode");
    };
}
