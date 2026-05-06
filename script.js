const form = document.querySelector("#registrationForm");
const note = document.querySelector("#formNote");
const membershipSelect = document.querySelector("#membershipSelect");
const accommodationSelect = document.querySelector("#accommodationSelect");
const registrationFee = document.querySelector("#registrationFee");
const accommodationFee = document.querySelector("#accommodationFee");
const totalPayment = document.querySelector("#totalPayment");
const totalPaymentInput = document.querySelector("#totalPaymentInput");

const formatCurrency = (amount) => `NT$${amount.toLocaleString("en-US")}`;

const updatePaymentSummary = () => {
  const selectedMembership = membershipSelect?.selectedOptions[0];
  const selectedOption = accommodationSelect?.selectedOptions[0];
  const registrationAmount = Number(selectedMembership?.dataset.fee || 0);
  const accommodationAmount = Number(selectedOption?.dataset.amount || 0);
  const totalAmount = registrationAmount + accommodationAmount;
  const formattedRegistration = formatCurrency(registrationAmount);
  const formattedAccommodation = formatCurrency(accommodationAmount);
  const formattedTotal = formatCurrency(totalAmount);

  if (registrationFee) {
    registrationFee.textContent = formattedRegistration;
  }

  if (accommodationFee) {
    accommodationFee.textContent = formattedAccommodation;
  }

  if (totalPayment) {
    totalPayment.textContent = formattedTotal;
  }

  if (totalPaymentInput) {
    totalPaymentInput.value = formattedTotal;
  }
};

membershipSelect?.addEventListener("change", updatePaymentSummary);
accommodationSelect?.addEventListener("change", updatePaymentSummary);
updatePaymentSummary();

form?.addEventListener("submit", () => {
  const data = new FormData(form);
  const name = data.get("entry.1169693684")?.toString().trim() || "Your registration";
  const total = totalPaymentInput?.value || "NT$0";

  note.textContent = "Submitting registration...";

  window.setTimeout(() => {
    note.textContent = `${name} has been submitted. Total payment: ${total}. Please email the transfer amount and the last five digits of your payment account to xxxxx after payment.`;
    form.reset();
    updatePaymentSummary();
  }, 900);
});
