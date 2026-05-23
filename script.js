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
