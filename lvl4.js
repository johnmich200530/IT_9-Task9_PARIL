function validateForm() {
    const name = document.getElementById("heroName").value.trim();
    const message = document.getElementById("message");

    if (name === "") {
      message.textContent = " Name cannot be empty!";
      message.className = "message error";
    } else {
      message.textContent = " Success! Welcome, " + name + "!";
      message.className = "message success";
    }
  }