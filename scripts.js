const API = "https://dummyjson.com/quotes/random";

// fetch quote
async function getQuote() {
  try {
    showLoading(true);

    const response = await fetch(API);

    if (!response.ok) {
      throw new Error("Error fetching");
    }

    const data = await response.json();

    displayQuote(data);

  } catch (error) {
    showError(error.message);
  } finally {
    showLoading(false);
  }
}

// display quote
function displayQuote(q) {
  const container = document.getElementById("quoteContainer");

  container.innerHTML = `
    <p>${q.quote}</p>
    <h3>${q.author}</h3>
  `;
}

// loading
function showLoading(show) {
  const loading = document.getElementById("loadingIndicator");

  if (show) {
    loading.classList.remove("hidden");
  } else {
    loading.classList.add("hidden");
  }
}

// error
function showError(msg) {
  const errorDiv = document.getElementById("errorDisplay");
  const msgSpan = document.getElementById("errorMessage");

  msgSpan.textContent = msg;
  errorDiv.classList.remove("hidden");
}

// events
document.getElementById("getQuoteBtn").addEventListener("click", getQuote);
document.getElementById("retryBtn").addEventListener("click", getQuote);