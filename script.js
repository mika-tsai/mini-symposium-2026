const form = document.querySelector("#registrationForm");
const note = document.querySelector("#formNote");
form.addEventListener("submit", (event) => {
  const data = new FormData(form);
  const name = data.get("entry.1169693684")?.toString().trim() || "Your registration";

  note.textContent = "Submitting registration...";

  window.setTimeout(() => {
    note.textContent = `${name} has been submitted. Please email the transfer amount and the last five digits of your payment account to xxxxx after payment.`;
    form.reset();
  }, 900);
});
