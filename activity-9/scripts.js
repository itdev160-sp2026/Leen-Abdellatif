// Activity 9: Contact Form Validation

console.log("=== Activity 9: Contact Form Validation ===");

// Get form
const contactForm = document.getElementById("contactForm");

// Validation state
const validationState = {
  name: false,
  email: false,
  message: false,
};

// Email pattern
const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/* =========================
   Part A: Validation Functions
========================= */

function validateName(value) {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return { isValid: false, message: "Name is required" };
  }

  return { isValid: true, message: "" };
}

function validateEmail(value) {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return { isValid: false, message: "Email is required" };
  }

  if (!emailPattern.test(trimmed)) {
    return { isValid: false, message: "Invalid email format" };
  }

  return { isValid: true, message: "" };
}

function validateMessage(value) {
  const trimmed = value.trim();

  if (trimmed.length === 0) {
    return { isValid: false, message: "Message is required" };
  }

  if (trimmed.length < 10) {
    return { isValid: false, message: "Message must be at least 10 characters" };
  }

  return { isValid: true, message: "" };
}

/* =========================
   Part B: Real-time Validation
========================= */

function showValidation(fieldName, validation) {
  const errorElement = document.getElementById(fieldName + "Error");
  const inputElement = document.getElementById(fieldName);

  errorElement.classList.remove("show");
  inputElement.classList.remove("valid", "invalid");

  if (!validation.isValid) {
    errorElement.textContent = validation.message;
    errorElement.classList.add("show");
    inputElement.classList.add("invalid");
  } else {
    inputElement.classList.add("valid");
  }
}

function validateField(fieldName, value) {
  let result;

  if (fieldName === "name") {
    result = validateName(value);
  } else if (fieldName === "email") {
    result = validateEmail(value);
  } else if (fieldName === "message") {
    result = validateMessage(value);
  }

  validationState[fieldName] = result.isValid;
  showValidation(fieldName, result);
  updateButton();

  return result.isValid;
}

function updateButton() {
  const btn = document.getElementById("submitBtn");

  const isValid =
    validationState.name &&
    validationState.email &&
    validationState.message;

  btn.disabled = !isValid;
}

/* =========================
   Real-time Events
========================= */

["name", "email", "message"].forEach((field) => {
  const element = document.getElementById(field);

  element.addEventListener("input", (e) => {
    validateField(field, e.target.value);
  });

  element.addEventListener("blur", (e) => {
    validateField(field, e.target.value);
  });
});

/* =========================
   Part C: Form Submission (FIXED)
========================= */
contactForm.addEventListener("submit", function (e) {
  e.preventDefault();

  console.log("=== FORM SUBMITTED ===");

  const nameValue = document.getElementById("name").value;
  const emailValue = document.getElementById("email").value;
  const messageValue = document.getElementById("message").value;

  let isFormValid = true;

  if (!validateField("name", nameValue)) isFormValid = false;
  if (!validateField("email", emailValue)) isFormValid = false;
  if (!validateField("message", messageValue)) isFormValid = false;

  if (isFormValid) {
    console.log("Form submitted successfully!");

    console.log("name:", nameValue);
    console.log("email:", emailValue);
    console.log("message:", messageValue);

    document.getElementById("formSuccess").classList.remove("hidden");

    contactForm.reset();

    validationState.name = false;
    validationState.email = false;
    validationState.message = false;

    updateButton();
  } else {
    console.log("Form has errors - not submitted");
  }
});
/* =========================
   Init
========================= */

updateButton();

console.log("Form validation ready!");
