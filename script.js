const form = document.querySelector("#registrationForm");
const note = document.querySelector("#formNote");
form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  const name = data.get("entry.1169693684")?.toString().trim() || "Your registration";

  note.textContent = "Submitting registration...";

  window.setTimeout(() => {
    note.textContent = `${name} has been submitted. The organizing lab will verify the payment using the account last five digits.`;
    form.reset();
  }, 900);
});
