document.addEventListener("DOMContentLoaded", function() {
  fetchImages();
});

const sheetId = "1jOjZ1SQG5zil9FSwghjih_0wg25tsWIzx2KtMhBT0Cw";
const baseUrl = `https://docs.google.com/spreadsheets/d/${sheetId}/gviz/tq?tqx=out:json&sheet=Sheet1`;

function fetchImages() {
  fetch(baseUrl)
      .then(response => response.text())
      .then(data => {
          const jsonData = JSON.parse(data.substr(47).slice(0, -2));
          const rows = jsonData.table.rows.slice(1);

          const images = rows.map(row => ({
              url: row.c[0].v,
              category: row.c[1].v
          }));

          displayImages(images);
      })
      .catch(error => console.error("Error fetching data: ", error));
}

function displayImages(images) {
  const gallery = document.getElementById("gallery");
  gallery.innerHTML = "";

  images.forEach(image => {
      const div = document.createElement("div");
      div.classList.add("grid-item");

      const imgElement = document.createElement("img");
      imgElement.src = image.url;
      imgElement.setAttribute("data-category", image.category);

      div.appendChild(imgElement);
      gallery.appendChild(div);
  });

  // Attach the lightbox event listener to the newly added images
  attachLightboxEvent();
}

function attachLightboxEvent() {
  const gridItems = document.querySelectorAll(".grid-item img");
  const lightbox = document.querySelector(".lightbox");
  const lightboxImg = document.querySelector(".lightbox-img");
  const closeBtn = document.querySelector(".close-btn");

  gridItems.forEach(item => {
      item.addEventListener("click", function() {
          const imgSrc = item.getAttribute("src");
          lightboxImg.setAttribute("src", imgSrc);
          lightbox.style.display = "block";
      });
  });

  closeBtn.addEventListener("click", function() {
      lightbox.style.display = "none";
  });

  // Close lightbox when clicking outside the image
  lightbox.addEventListener("click", function(e) {
      if (e.target !== lightboxImg) {
          lightbox.style.display = "none";
      }
  });
}

function filterImages(category) {
  const gallery = document.getElementById("gallery");
  const gridItems = gallery.getElementsByClassName("grid-item");

  for (let item of gridItems) {
      const img = item.getElementsByTagName("img")[0]; // Get the img element inside the grid-item

      if (category === "all" || img.getAttribute("data-category") === category) {
          item.style.display = "block"; // Show the entire grid-item
      } else {
          item.style.display = "none"; // Hide the entire grid-item
      }
  }
}

// Floating arrow button functionality
window.addEventListener('scroll', () => {
  let footerupButton = document.querySelector('.float-arrow');
  if (window.scrollY > 300) {
      footerupButton.classList.add('arrow-show');
  } else {
      footerupButton.classList.remove('arrow-show');
  }
});
