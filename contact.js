// Assuming this code is placed in a <script> tag in your HTML file

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contact-form");
  
    contactForm.addEventListener("submit", function(event) {
      event.preventDefault();
  
      const nameInput = document.getElementById("name");
      const emailInput = document.getElementById("email");
      const phoneInput = document.getElementById("phone");
      const messageInput = document.getElementById("message");
  
      const name = nameInput.value.trim();
      const email = emailInput.value.trim();
      const phone = phoneInput.value.trim();
      const message = messageInput.value.trim();
  
      // Validation checks
      if (!name || !email || !phone ) {
        alert("Please fill in all required fields");
        return;
      }
  
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!emailRegex.test(email)) {
        alert("Please enter a valid email address");
        return;
      }
  
      const phoneRegex = /^\d{10}$/; // Assuming a 10-digit phone number format without any special characters
      if (!phoneRegex.test(phone)) {
        alert("Please enter a valid phone number");
        return;
      }
  
      // If all validation checks pass, you can proceed to submit the form or perform other actions.
      // For example, you can call a function to handle form submission here.
      // submitForm(name, email, phone, message);
      alert("Form submitted successfully!");
      
      // Optionally, reset the form
      contactForm.reset();
    });
  });
  