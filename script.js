document.getElementById("show-contact-form").addEventListener("click", function () {
    const form = document.getElementById("contact-form");
    form.style.display = form.style.display === "none" ? "block" : "none";
});

// Handle form submission
document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById("name").value;
    const message = document.getElementById("message").value;

    // Simple confirmation alert
    alert(`Thanks for your message, ${name}!\nWe'll get back to you soon.`);

    // Clear form and hide it
    this.reset();
    document.getElementById("contact-form").style.display = "none";
});

