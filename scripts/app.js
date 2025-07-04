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
  response.textContent = "YOU CLICKED IT .. I HOPE THIS PAGE MAKES YOUR DAY EVRYTIME EVEN JUST A LITTLE 🦋";
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
