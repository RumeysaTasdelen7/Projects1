function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


// ✅ RESİM BÜYÜTME (Lightbox) Fonksiyonları

function openLightbox(img) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalVideo = document.getElementById("lightbox-video");

  modal.style.display = "block";
  modalImg.style.display = "block";
  modalVideo.style.display = "none";

  modalImg.src = img.src;
}

function openVideoLightbox(videoSrc) {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalVideo = document.getElementById("lightbox-video");

  modal.style.display = "block";
  modalImg.style.display = "none";
  modalVideo.style.display = "block";

  modalVideo.src = videoSrc;
  modalVideo.play();
}

function closeLightbox() {
  const modal = document.getElementById("lightbox-modal");
  const modalImg = document.getElementById("lightbox-img");
  const modalVideo = document.getElementById("lightbox-video");

  modal.style.display = "none";
  modalImg.src = "";
  modalVideo.pause();
  modalVideo.currentTime = 0;
  modalVideo.src = "";
}


