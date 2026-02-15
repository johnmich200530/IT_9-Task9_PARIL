let currentLevel = 1;
const maxLevel = 6;

const levelButton = document.getElementById("levelup");
const levelText = document.getElementById("level-text");
const badge = document.getElementById("level-badge");

levelButton.addEventListener("click", function () {

  if (currentLevel < maxLevel) {
    currentLevel++;

    // Update badge
    badge.textContent = "Level " + currentLevel;

    // Update message
    levelText.textContent = "You have leveled up! Current level: " + currentLevel;
  } 

});
