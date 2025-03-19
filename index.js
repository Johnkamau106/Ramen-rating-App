const ramens = [
  {
    id: 1,
    name: "Shoyu Ramen",
    restaurant: "Ichiran",
    image: "https://moringa.instructure.com/courses/967/files/517801/preview",
    rating: 5,
    comment: "Delicious!",
  },
  {
    id: 2,
    name: "Miso Ramen",
    restaurant: "Menya",
    image: "https://moringa.instructure.com/courses/967/files/517799/preview",
    rating: 4,
    comment: "Very flavorful!",
  },
  {
    id: 3,
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "https://moringa.instructure.com/courses/967/files/517798/preview",
    rating: null,
    comment: null,
  },
  {
    id: 4, // Changed the ID here to make it unique
    name: "Tonkotsu Ramen",
    restaurant: "Ramen-ya",
    image: "https://moringa.instructure.com/courses/967/files/517797/preview",
    rating: null,
    comment: null,
  },
];


function displayRamens() {
  const ramenMenu = document.getElementById("ramen-menu");
  ramenMenu.innerHTML = ""; 

  ramens.forEach((ramen) => {
    const ramenContainer = document.createElement("div");
    ramenContainer.classList.add("ramen-container");

    const img = document.createElement("img");
    img.src = ramen.image;
    img.alt = ramen.name;
    img.classList.add("ramen-image");
    img.addEventListener("click", () => handleClick(ramen));

    const ramenName = document.createElement("p");
    ramenName.textContent = ramen.name;
    ramenName.classList.add("ramen-name");

    ramenContainer.appendChild(img);
    ramenContainer.appendChild(ramenName);

    ramenMenu.appendChild(ramenContainer);
  });
}


function handleClick(ramen) {
  document.getElementById("ramen-name").textContent = ramen.name;
  document.getElementById("ramen-restaurant").textContent = ramen.restaurant;

  const selectedRamenImage = document.getElementById("selected-ramen-image");
  selectedRamenImage.src = ramen.image;
  selectedRamenImage.alt = ramen.name;

  document.getElementById("rating-value").textContent =
    ramen.rating !== null ? ramen.rating : "N/A";
  document.getElementById("comment-value").textContent =
    ramen.comment !== null ? ramen.comment : "N/A";

  document.getElementById("selected-ramen-container").style.display = "block";
}


function addSubmitListener() {
  const form = document.getElementById("new-ramen-form");
  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const newRamen = {
      id: ramens.length + 1,
      name: document.getElementById("name").value,
      restaurant: document.getElementById("restaurant").value,
      image: document.getElementById("image").value,
      rating: document.getElementById("rating").value,
      comment: document.getElementById("comment").value,
    };

    ramens.push(newRamen);
    displayRamens();
    form.reset();
    handleClick(newRamen);
    document.getElementById("new-ramen-form").style.display = "none"; 
  });
}


function toggleForm() {
  const form = document.getElementById("new-ramen-form");
  form.style.display =
    form.style.display === "none" || form.style.display === ""
      ? "block"
      : "none";
}


function main() {
  displayRamens();
  addSubmitListener();
  document
    .getElementById("Add-Ramen-ramen")
    .addEventListener("click", toggleForm); 
}


document.addEventListener("DOMContentLoaded", main);
