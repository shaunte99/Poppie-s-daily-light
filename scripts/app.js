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
  response.textContent = "You clicked it! That made my day. I hope this site makes you smile like you made me smile today 🦋";
}
