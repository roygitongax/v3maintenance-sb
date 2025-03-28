document.getElementById('notifyForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  
  const email = document.getElementById('emailInput').value;
  try {
    const response = await fetch("https://rgx-sgworker.roygitonga27.workers.dev/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email })
    });

    if (response.ok) {
      // Replace the content of the .content container with the confirmation message.
      document.querySelector('.content').innerHTML = `
        <h1 class="confirmation-headline">You're on the waiting list</h1>
        <p class="confirmation-text">You will receive an email confirming your request</p>
      `;
    } else {
      alert("Oops! Something went wrong. Try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("Oops! Something went wrong. Try again.");
  }
});
