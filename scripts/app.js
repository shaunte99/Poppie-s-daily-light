fetch("data/daily.json")
  .then(response => response.json())
  .then(data => {
    document.getElementById("quote").textContent = `"${data.quote.text}" — ${data.quote.author}`;
    document.getElementById("scripture").innerHTML = `"${data.scripture.text}"<br><strong>— ${data.scripture.reference}</strong>`;
    document.getElementById("music").src = data.music.youtubeEmbed;
    document.getElementById("love-note").innerHTML = data.message;
  })
  .catch(err => {
    console.error("Failed to load daily data:", err);
  });
