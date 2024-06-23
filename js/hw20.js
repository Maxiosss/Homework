document.addEventListener("DOMContentLoaded", function () {
  const images = document.querySelectorAll(".gallery .image");
  const fullImageContainer = document.querySelector(".full-image-container");
  const fullImage = document.querySelector(".full-image");
  let currentIndex = -1;

  images.forEach((image, index) => {
    image.addEventListener("click", () => {
      currentIndex = index;
      showFullImage(image.src);
    });
  });

  fullImageContainer.addEventListener("click", () => {
    fullImageContainer.style.display = "none";
  });

  document.addEventListener("keydown", (event) => {
    if (fullImageContainer.style.display === "flex") {
      if (event.key === "ArrowRight") {
        currentIndex = (currentIndex + 1) % images.length;
        showFullImage(images[currentIndex].src);
      } else if (event.key === "ArrowLeft") {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showFullImage(images[currentIndex].src);
      }
    }
  });

  function showFullImage(src) {
    fullImage.src = src;
    fullImageContainer.style.display = "flex";
  }
});

document.addEventListener("DOMContentLoaded", function () {
  const controls = document.getElementById("controls");
  const input = controls.querySelector('input[type="number"]');
  const renderButton = controls.querySelector('button[data-action="render"]');
  const destroyButton = controls.querySelector('button[data-action="destroy"]');
  const boxesContainer = document.getElementById("boxes");

  renderButton.addEventListener("click", () => {
    const amount = parseInt(input.value, 10);
    if (!isNaN(amount)) {
      createBoxes(amount);
    }
  });

  destroyButton.addEventListener("click", destroyBoxes);

  function createBoxes(amount) {
    destroyBoxes();
    const fragment = document.createDocumentFragment();
    let size = 30;
    for (let i = 0; i < amount; i++) {
      const box = document.createElement("div");
      box.classList.add("box");
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomRgbColor();
      fragment.appendChild(box);
      size += 10;
    }
    boxesContainer.appendChild(fragment);
  }

  function destroyBoxes() {
    boxesContainer.innerHTML = "";
  }

  function getRandomRgbColor() {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }
});
