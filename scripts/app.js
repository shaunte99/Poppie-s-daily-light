fetch("data/daily.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("quote").textContent = `"${data.quote.text}" — ${data.quote.author}`;
    document.getElementById("scripture").innerHTML = `"${data.scripture.text}"<br><strong>— ${data.scripture.reference}</strong>`;
    document.getElementById("music1").src = data.music.youtubeEmbed1;
    document.getElementById("music2").src = data.music.youtubeEmbed2;
    document.getElementById("love-note").innerHTML = data.message;
  })
  .catch(err => console.error("Failed to load daily data:", err));

function showClickMessage() {
  const response = document.getElementById("click-response");
  response.classList.remove("hidden");
  response.textContent = "I hope this site always makes your heart🦋";
}

function showMoodMessage(mood) {
  const moodMessage = document.getElementById("mood-message");
  const messages = {
    good: "I’m so happy you’re smiling today. You deserve days like this, Keep shining, Queen.🌞",
    busy: "Even busy bees make honey. You’re still creating sweetness 🍯",
    bad: "It’s okay to not be okay sometimes. You’re allowed to feel. Cry if you need to, rest if you must.. You are still worthy. Still loved and I am always here for you💗",
    grateful: "Gratitude makes your soul glow. You're golden ..it makes the heart richer. When you say thank you to life, heaven whispers you’re welcome🌟"
  };
  moodMessage.textContent = messages[mood];
  moodMessage.classList.remove("hidden");
}

function saveJournal() {
  const entry = document.getElementById("journal-entry").value;
  localStorage.setItem("poppieJournal", entry);
  document.getElementById("save-confirmation").classList.remove("hidden");
}

window.addEventListener("DOMContentLoaded", () => {
  const saved = localStorage.getItem("poppieJournal");
  if (saved) {
    document.getElementById("journal-entry").value = saved;
  }
});

function checkPuzzleCompletion() {
  const answers = [];
  for (let i = 1; i <= 10; i++) {
    answers.push(document.getElementById("q" + i).value);
  }

  const allAnswered = answers.every(val => val !== "");
  if (allAnswered) {
    document.getElementById("letter-surprise").classList.remove("hidden");
  }
}

function revealCrownMessage(crownNumber) {
  const messages = {
    1: "You walk into a room and it forgets what it was doing. That’s the kind of presence you have....loud, bright, unforgettable.",
    2: "Some girls hope to be seen. You were born watched. But the rare thing? You actually deserve the eyes.",
    3: "There’s a light in you that doesn’t ask permission. It just shows up, like golden hour ...soft, perfect, exactly what the day needed.",
    4: "You don’t need to say much to be remembered. Your smile speaks in echoes. Your vibe stays long after the conversation ends.",
    5: "Even when you’re unsure, you carry yourself like you’ve already won. That’s a kind of royalty they don’t teach it’s just in you.",
    6: "You’re the kind of beauty people build stories around."
  };

  const message = messages[crownNumber];
  const crownMsg = document.getElementById("crown-message");
  crownMsg.textContent = message;
  crownMsg.classList.remove("hidden");
}


