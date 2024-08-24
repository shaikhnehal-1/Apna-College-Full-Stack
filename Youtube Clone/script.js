// Toggle Sidebar
document
  .getElementById("toggle-sidebar")
  .addEventListener("click", function () {
    const sidebar = document.getElementById("sidebar");
    sidebar.classList.toggle("closed");
  });

// Search Functionality
document.getElementById("search-button").addEventListener("click", function () {
  const searchInput = document
    .getElementById("search-input")
    .value.toLowerCase();
  const videoCards = document.querySelectorAll(".video-card");
  let matchFound = false;

  videoCards.forEach(function (card) {
    const title = card.getAttribute("data-title").toLowerCase();
    if (title.includes(searchInput)) {
      card.style.display = "block";
      matchFound = true;
    } else {
      card.style.display = "none";
    }
  });

  const noResultsMessage = document.getElementById("no-results");
  if (matchFound) {
    noResultsMessage.style.display = "none";
  } else {
    noResultsMessage.style.display = "block";
  }
});

// Video Card Click
document.querySelectorAll(".video-card").forEach(function (card) {
  card.addEventListener("click", function () {
    const title = card.getAttribute("data-title");
    alert("You clicked on: " + title);
  });
});

// Toggle Dropdown Menu
document.getElementById("user-avatar").addEventListener("click", function () {
  const dropdownMenu = document.getElementById("dropdown-menu");
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close the dropdown if clicked outside
window.addEventListener("click", function (event) {
  const dropdownMenu = document.getElementById("dropdown-menu");
  if (!event.target.matches("#user-avatar")) {
    if (dropdownMenu.style.display === "block") {
      dropdownMenu.style.display = "none";
    }
  }
});

// Like/Dislike Functionality
document.querySelectorAll(".like-button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering card click event

    const likeCountSpan = this.nextElementSibling;
    let count = parseInt(likeCountSpan.getAttribute("data-count"));
    count++;
    likeCountSpan.setAttribute("data-count", count);
    likeCountSpan.textContent =
      count >= 1000 ? (count / 1000).toFixed(1) + "k" : count;
    likeCountSpan.style.display = "inline";

    const dislikeButton = this.nextElementSibling.nextElementSibling;
    if (dislikeButton.classList.contains("disliked")) {
      dislikeButton.classList.remove("disliked");
      const dislikeCountSpan = dislikeButton.nextElementSibling;
      dislikeCountSpan.setAttribute(
        "data-count",
        parseInt(dislikeCountSpan.getAttribute("data-count")) + 1
      );
      dislikeCountSpan.textContent =
        parseInt(dislikeCountSpan.getAttribute("data-count")) + 1;
    }
  });
});

document.querySelectorAll(".dislike-button").forEach(function (button) {
  button.addEventListener("click", function (event) {
    event.stopPropagation(); // Prevent triggering card click event

    const dislikeCountSpan = this.nextElementSibling;
    let count = parseInt(dislikeCountSpan.getAttribute("data-count"));
    count++;
    dislikeCountSpan.setAttribute("data-count", count);
    dislikeCountSpan.textContent = count;
    dislikeCountSpan.style.display = "inline";

    const likeButton = this.previousElementSibling;
    if (likeButton.classList.contains("liked")) {
      likeButton.classList.remove("liked");
      const likeCountSpan = likeButton.nextElementSibling;
      likeCountSpan.setAttribute(
        "data-count",
        parseInt(likeCountSpan.getAttribute("data-count")) + 1
      );
      likeCountSpan.textContent =
        (parseInt(likeCountSpan.getAttribute("data-count")) / 1000).toFixed(1) +
        "k";
    }
  });
});

// Click to Play Video (Simulated)
document.querySelectorAll(".video-card").forEach(function (card) {
  card.addEventListener("click", function () {
    const title = card.getAttribute("data-title");
    alert("Playing: " + title);
    // Here you could add code to open a modal with a video player
  });
});

// Theme Toggle Functionality
const themeToggleButton = document.getElementById("theme-toggle");

// Check local storage for theme preference
const savedTheme = localStorage.getItem("theme");
if (savedTheme) {
  document.documentElement.setAttribute("data-theme", savedTheme);
}

// Toggle Theme
themeToggleButton.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";
  document.documentElement.setAttribute("data-theme", newTheme);
  localStorage.setItem("theme", newTheme);
});