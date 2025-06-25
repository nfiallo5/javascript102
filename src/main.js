"use strict";

const itemData = {
  item1: {
    name: "Finalista 01",
    image: "https://picsum.photos/seed/animal/250/200",
    photographer: "John Doe",
    description:
      " Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    score: 42,
  },
  item2: {
    name: "Finalista 2",
    image: "https://picsum.photos/seed/beach/250/200",
    photographer: "Jane Smith",
    description:
      "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    score: 84,
  },
  item3: {
    name: "Finalista 3",
    image: "https://picsum.photos/seed/mountain/250/200",
    photographer: "Alice Johnson",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    score: 36,
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const selectElement = document.getElementById("items");
  const img = document.getElementById("displayImage");
  const photoInput = document.getElementById("photographer");
  const descr = document.getElementById("description");
  const score = document.getElementById("score");
  const increaseScore = document.getElementById("increaseScore");
  const decreaseScore = document.getElementById("decreaseScore");

  let itemActual = null;

  Object.keys(itemData).forEach((key) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = itemData[key].name;
    selectElement.appendChild(option);
  });

  const displayItem = (itemKey) => {
    if (itemKey == "-1" || !itemData[itemKey]) {
      itemActual = null;
      return;
    }

    itemActual = itemKey;
    const item = itemData[itemKey];

    img.src = item.image;
    img.alt = item.name;
    photoInput.value = item.photographer;
    descr.value = item.description;
    score.value = item.score;
  };

  selectElement.addEventListener("change", (e) => {
    displayItem(e.target.value);
  });

  increaseScore.addEventListener("click", () => {
    if (itemActual) {
      itemData[itemActual].score += 1;
      score.value = itemData[itemActual].score;
    }
  });

  decreaseScore.addEventListener("click", () => {
    if (itemActual) {
      itemData[itemActual].score -= 1;
      score.value = itemData[itemActual].score;
    }
  });
});
