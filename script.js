document.getElementById("notifyForm").addEventListener("submit", async function (e) {
  e.preventDefault();
  const email = document.getElementById("emailInput").value;

  const response = await fetch("https://rgx-sgworker.roygitonga27.workers.dev/", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email })
  });

  if (response.ok) {
    alert("You're on the waiting list! Check your email for confirmation.");
  } else {
    alert("Oops! Something went wrong. Try again.");
  }
});
