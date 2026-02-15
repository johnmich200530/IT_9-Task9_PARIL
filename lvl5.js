let coins = 0;

  function updateDisplay() {
    document.getElementById("coinDisplay").textContent = "Coins: " + coins;
  }

  function increase() {
    coins++;
    updateDisplay();
  }

  function decrease() {
    if (coins > 0) {
      coins--;
      updateDisplay();
    }
  }