console.log("App loaded");

const greetingMessage = document.getElementById("greeting-message");
const greetingImage = document.getElementById("greeting-image");
const nameInput = document.getElementById("nameInput");

const greetings = {
  birthday: {
    message: "Happy Birthday!",
    image: "https://picsum.photos/id/1/300/200",
    alt: "Birthday"
  },
  holiday: {
    message: "Happy Holidays!",
    image: "https://picsum.photos/id/12/300/200",
    alt: "Holiday"
  },
  thankYou: {
    message: "Thank You!",
    image: "https://picsum.photos/id/47/300/200",
    alt: "Thank You"
  }
};

function updateGreeting(type) {
  greetingMessage.textContent = greetings[type].message;
  greetingImage.src = greetings[type].image;
  greetingImage.alt = greetings[type].alt;
}

function setBirthdayGreeting() {
  updateGreeting("birthday");
}

function setHolidayGreeting() {
  updateGreeting("holiday");
}

function setThankYouGreeting() {
  updateGreeting("thankYou");
}

function setRandomGreeting() {
  const keys = Object.keys(greetings);
  const random = keys[Math.floor(Math.random() * keys.length)];
  updateGreeting(random);
}

function personalizeGreeting() {
  const name = nameInput.value;

  if (name === "") {
    alert("Enter your name");
    return;
  }

  greetingMessage.innerHTML += "<br><br>Dear " + name;
  nameInput.value = "";
}

document.getElementById("output").innerHTML =
  "<h3>Loaded successfully</h3>";
