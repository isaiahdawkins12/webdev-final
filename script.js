// fake boot sequence shown before the page is revealed

const BOOT_LINES = [
  "> initializing system...",
  "> loading modules: [html, css, js]",
  "> mounting filesystem...",
  "> checking integrity... ok",
  "> welcome, guest",
  "> launching portfolio.exe",
];

function wait(ms) {
  return new Promise((r) => setTimeout(r, ms));
}

async function runBootSequence() {
  const bootText = document.getElementById("boot-text");
  for (const line of BOOT_LINES) {
    bootText.textContent += line + "\n";
    await wait(400);
  }
  await wait(500);
  document.getElementById("boot-screen").classList.add("fade-out");
  await wait(600);
}

runBootSequence();

// fake terminal-style loading sequence when the contact form is submitted
const SEND_LINES = [
  "> validating input...",
  "> encrypting message...",
  "> connecting to mail server...",
  "> transmitting data...",
  "> message received. thanks for reaching out!",
];

function setupContactForm() {
  const form = document.getElementById("contact-form");
  const status = document.getElementById("contact-status");

  form.addEventListener("submit", async (event) => {
    event.preventDefault();
    form.style.display = "none";
    status.textContent = "";

    for (const line of SEND_LINES) {
      const p = document.createElement("p");
      p.textContent = line;
      status.appendChild(p);
      await wait(600);
    }
  });
}

setupContactForm();
