const header = document.querySelector("[data-header]");
const menuButton = document.querySelector("[data-menu-button]");
const nav = document.querySelector("[data-nav]");
const eventType = document.querySelector("[data-event-type]");
const estimate = document.querySelector("[data-estimate]");
const deposit = document.querySelector("[data-deposit]");
const form = document.querySelector("[data-booking-form]");
const formNote = document.querySelector("[data-form-note]");
const fundraiserParticipants = document.querySelector("[data-fundraiser-participants]");
const fundraiserEntry = document.querySelector("[data-fundraiser-entry]");
const fundraiserSponsor = document.querySelector("[data-fundraiser-sponsor]");
const fundraiserTotal = document.querySelector("[data-fundraiser-total]");

const packagePrices = {
  "Hosted Golf Bay": 499,
  "Fundraiser Challenge": 650,
  "Corporate Golf Activation": 1500,
  "Future Configuration": 799,
};

function formatCurrency(value) {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(value);
}

function updateEstimate() {
  const price = packagePrices[eventType.value] || 799;
  estimate.textContent = formatCurrency(price);
  deposit.textContent = formatCurrency(Math.max(100, Math.round(price * 0.25)));
}

function updateFundraiserTotal() {
  if (!fundraiserParticipants || !fundraiserEntry || !fundraiserSponsor || !fundraiserTotal) return;
  const participants = Number(fundraiserParticipants.value || 0);
  const entry = Number(fundraiserEntry.value || 0);
  const sponsor = Number(fundraiserSponsor.value || 0);
  fundraiserTotal.textContent = formatCurrency(participants * entry + sponsor);
}

function setHeaderState() {
  header.classList.toggle("is-scrolled", window.scrollY > 24);
}

menuButton.addEventListener("click", () => {
  const nextState = menuButton.getAttribute("aria-expanded") !== "true";
  menuButton.setAttribute("aria-expanded", String(nextState));
  nav.classList.toggle("is-open", nextState);
});

nav.addEventListener("click", (event) => {
  if (event.target.matches("a")) {
    menuButton.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  }
});

document.addEventListener("click", (event) => {
  const packageLink = event.target.closest("[data-package]");
  if (!packageLink) return;
  eventType.value = packageLink.dataset.package;
  updateEstimate();
});

eventType.addEventListener("change", updateEstimate);
for (const control of [fundraiserParticipants, fundraiserEntry, fundraiserSponsor]) {
  if (control) control.addEventListener("input", updateFundraiserTotal);
}
window.addEventListener("scroll", setHeaderState, { passive: true });

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const data = new FormData(form);
  const city = data.get("city") || "your area";
  formNote.textContent = `Draft request captured locally for ${data.get("eventType")} in ${city}. In production, this would create a quote request and deposit link.`;
});

updateEstimate();
updateFundraiserTotal();
setHeaderState();
