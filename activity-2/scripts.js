document.addEventListener("DOMContentLoaded", function() {
  const checkBtn = document.getElementById("checkAge");
  checkBtn.addEventListener("click", checkAge);

  function checkAge() {
    const ageInput = document.getElementById("ageInput");
    const resultDiv = document.getElementById("result");
    const inputValue = ageInput.value.trim();

    console.log("User input: " + inputValue);

    resultDiv.className = "";

    if (inputValue === "") {
      resultDiv.textContent = "Please enter your age";
      resultDiv.className = "invalid";
      return;
    }

    const age = Number(inputValue);

    if (isNaN(age)) {
      resultDiv.textContent = "Invalid age - please enter a number";
      resultDiv.className = "invalid";
      return;
    }

    if (age < 0 || age > 150) {
      resultDiv.textContent = "Invalid age - please enter a realistic age (0-150)";
      resultDiv.className = "invalid";
      return;
    }

    if (age >= 18) {
      resultDiv.textContent = "You are " + age + " years old - You are an adult";
      resultDiv.className = "adult";
    } else {
      resultDiv.textContent = "You are " + age + " years old - You are a minor";
      resultDiv.className = "minor";
    }
  }
});
