// Wait for DOM to load
document.addEventListener("DOMContentLoaded", () => {
  // Modal elements
  const modal = document.getElementById("media-modal");
  const modalBody = document.getElementById("modal-body");
  const closeBtn = modal.querySelector(".close-btn");

  // Final message modal elements
  const finalModal = document.getElementById("final-message-modal");
  const finalCloseBtn = finalModal.querySelector(".close-btn");
  const finalMessageBtn = document.getElementById("final-message-btn");

  // Background music elements
  const music = document.getElementById("background-music");
  const musicToggle = document.getElementById("music-toggle");

  // Track music play state
  let musicPlaying = false;

  // Function to open modal with image or video
  function openModal(mediaType, src, alt = "") {
    modalBody.innerHTML = ""; // Clear previous content

    if (mediaType === "image") {
      const img = document.createElement("img");
      img.src = src;
      img.alt = alt;
      modalBody.appendChild(img);
    } else if (mediaType === "video") {
      const video = document.createElement("video");
      video.src = src;
      video.controls = true;
      video.autoplay = true;
      video.style.maxHeight = "80vh";
      modalBody.appendChild(video);
    }

    modal.classList.remove("hidden");
    document.body.style.overflow = "hidden"; // prevent background scroll
  }

  // Function to close modal
  function closeModal() {
    modal.classList.add("hidden");
    modalBody.innerHTML = "";
    document.body.style.overflow = "";
  }

  // Close modal on clicking close button or outside modal content
  closeBtn.addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => {
    if (e.target === modal) closeModal();
  });

  // Click handlers for all clickable images
  document.querySelectorAll(".clickable-image").forEach((img) => {
    img.addEventListener("click", () => {
      openModal("image", img.src, img.alt);
    });
  });

  // Click handlers for video links
  document.querySelectorAll(".video-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      const src = link.getAttribute("data-video-src");
      openModal("video", src);
    });
  });

  // Final message modal toggle
  finalMessageBtn.addEventListener("click", () => {
    finalModal.classList.remove("hidden");
    document.body.style.overflow = "hidden";
  });
  finalCloseBtn.addEventListener("click", () => {
    finalModal.classList.add("hidden");
    document.body.style.overflow = "";
  });
  finalModal.addEventListener("click", (e) => {
    if (e.target === finalModal) {
      finalModal.classList.add("hidden");
      document.body.style.overflow = "";
    }
  });

  // Background music toggle
  musicToggle.addEventListener("click", () => {
    if (musicPlaying) {
      music.pause();
      musicPlaying = false;
      musicToggle.textContent = "🔈";
    } else {
      music.play();
      musicPlaying = true;
      musicToggle.textContent = "🔊";
    }
  });

  // Optional: start music auto muted, let user toggle on
  music.volume = 0.2; // gentle volume
  music.pause();

  // Scroll animation trigger for fade-in
  const faders = document.querySelectorAll(".fade-in");
  const appearOptions = {
    threshold: 0,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
