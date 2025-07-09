// --- Typewriter ---
const introText = "Hey Poppie... this is your soft, safe space. Here, your dreams matter.And you are everything.";
let i = 0;
function typeWriter() {
  if (i < introText.length) {
    document.getElementById("typewriter-text").textContent += introText.charAt(i);
    i++;
    setTimeout(typeWriter, 60);
  }
}

// --- Save Inputs ---
function saveManifest() {
  const manifest = document.getElementById("dailyManifest").value;
  localStorage.setItem("poppieManifest", manifest);
  showConfirm("manifestConfirmation");
}

function saveDream() {
  const dream = document.getElementById("dreamNote").value;
  localStorage.setItem("poppieDream", dream);
  showConfirm("dreamConfirmation");
}

function saveSelfLove() {
  const selfLove = document.getElementById("selfLoveInput").value;
  localStorage.setItem("poppieSelfLove", selfLove);
  showConfirm("selfLoveConfirm");
}

function saveDearMe() {
  const letter = document.getElementById("dearMeNote").value;
  localStorage.setItem("poppieDearMe", letter);
  showConfirm("dearMeConfirm");
}

function restoreInputs() {
  document.getElementById("dailyManifest").value = localStorage.getItem("poppieManifest") || "";
  document.getElementById("dreamNote").value = localStorage.getItem("poppieDream") || "";
  document.getElementById("selfLoveInput").value = localStorage.getItem("poppieSelfLove") || "";
  document.getElementById("dearMeNote").value = localStorage.getItem("poppieDearMe") || "";
  restoreEnergies();
}

// --- Mood Messages (Now real and poetic) ---
function showMoodMessage(mood) {
  const moodMessage = document.getElementById("mood-message");
  const messages = {
    good: "You feeling good today? That’s beautiful to me. I hope whatever made you smile today, you hold onto it. You deserve joy like this every day",
    
    busy: "You're carrying so much, and I see that. Even when you're running around, your heart stays kind. You're not just getting through the day you're building something beautiful. Don’t forget to breathe, okay? 🫶",

    bad: "If today’s heavy, don’t carry it alone. You don’t have to be perfect I still see you. Still rooting for you. Always. 💗",

    grateful: "You being grateful makes everything around you warmer. Heaven notices. I do too. 🌤️"
  };

  moodMessage.textContent = messages[mood];
  moodMessage.classList.remove("hidden");
}

// --- Energy Check ---
function saveEnergies() {
  const selectedEnergies = [];
  const checkboxes = document.querySelectorAll('.energy-checklist input');

  checkboxes.forEach((cb) => {
    if (cb.checked) selectedEnergies.push(cb.id);
  });

  localStorage.setItem("poppieEnergies", JSON.stringify(selectedEnergies));
}

function restoreEnergies() {
  const saved = JSON.parse(localStorage.getItem("poppieEnergies")) || [];
  saved.forEach((id) => {
    const cb = document.getElementById(id);
    if (cb) cb.checked = true;
  });
}

document.querySelectorAll(".energy-checklist input").forEach(cb => {
  cb.addEventListener("change", saveEnergies);
});

// --- Affirmations ---
const affirmations = [
  "You are powerful even on your quietest days.",
  "You carry magic without trying.",
  "The world feels softer when you smile.",
  "You are allowed to rest and still be radiant.",
  "Every dream you have is worth blooming.",
  "Your softness is strength in disguise.",
  "You are an answered prayer.. even on your hardest day."
];
function pickAffirmation() {
  const random = Math.floor(Math.random() * affirmations.length);
  document.getElementById("affirmationDisplay").innerText = `🌟 "${affirmations[random]}"`;
}

// --- Night Mode ---
document.getElementById("toggleNight").addEventListener("click", () => {
  document.body.classList.toggle("night-mode");
});

// --- Confirm Message Fade In ---
function showConfirm(id) {
  const el = document.getElementById(id);
  el.style.display = "block";
  setTimeout(() => {
    el.style.display = "none";
  }, 3000);
}

// --- On Load ---
window.onload = function () {
  typeWriter();
  pickAffirmation();
  restoreInputs();
};
