  function checkDoor(doorNumber) {
    const result = document.getElementById("result");

    // Door 2 is the correct one
    if (doorNumber === 2) {
      result.textContent = "✅ Correct! You picked the right door!";
      result.style.color = "green";
    } else {
      result.textContent = "❌ Wrong door! Try again.";
      result.style.color = "red";
    }
  }