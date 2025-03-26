document.getElementById('notifyForm').addEventListener('submit', function (e) {
    e.preventDefault();
  
    const email = document.getElementById('emailInput').value;
    fetch("https://sendgrid-proxy.your-subdomain.workers.dev", {  // Replace with your Worker URL
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ email: email })
    })
    .then(response => {
      if (response.ok) {
        alert('Thank you! You will be notified when we are back.');
      } else {
        alert('An error occurred. Please try again later.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again later.');
    });
  });
  
