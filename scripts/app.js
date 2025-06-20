fetch("data/daily.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("quote").textContent = `"${data.quote.text}" — ${data.quote.author}`;
    document.getElementById("scripture").innerHTML = `"${data.scripture.text}"<br><strong>— ${data.scripture.reference}</strong>`;
    document.getElementById("music1").src = data.music.youtubeEmbed1;
    document.getElementById("music2").src = data.music.youtubeEmbed2;
    document.getElementById("love-note").innerHTML = data.message;
  })
  .catch(err => {
    console.error("Failed to load daily data:", err);
  });

function showClickMessage() {
  const response = document.getElementById("click-response");
  response.classList.remove("hidden");
  response.textContent = "Thank you for clicking this Ms sunshine .... I'll tell you a little secret .. the world is a way better place with you in it 🦋💖";
}
