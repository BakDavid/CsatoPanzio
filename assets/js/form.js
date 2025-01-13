document.getElementById("contactForm").addEventListener("submit", function (e) {
    e.preventDefault(); // Prevent default form submission behavior
  
    const form = e.target;
    const formData = new FormData(form);
  
    // Show loading spinner
    document.querySelector(".loading").style.display = "block";
  
    fetch("https://formsubmit.co/csatopanzio@gmail.com", {
      method: "POST",
      body: formData,
      headers: {
        Accept: "application/json",
      },
    })
      .then((response) => {
        document.querySelector(".loading").style.display = "none"; // Hide loading spinner
        if (response.ok) {
          document.querySelector(".sent-message").style.display = "block"; // Show success message
          document.querySelector(".error-message").style.display = "none";
          form.reset(); // Reset form fields
        } else {
          throw new Error("Submission failed");
        }
      })
      .catch((error) => {
        document.querySelector(".loading").style.display = "none"; // Hide loading spinner
        document.querySelector(".error-message").style.display = "block"; // Show error message
        document.querySelector(".sent-message").style.display = "none";
        console.error("Error:", error);
      });
  });