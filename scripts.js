console.log("=== Product Catalog App ===");

// ===== PRODUCTS DATA =====
const products = [
    {
        id: 1,
        name: "Headphones",
        description: "Wireless headphones",
        price: 199.99,
        category: "electronics",
        image: "https://picsum.photos/200?1"
    },
    {
        id: 2,
        name: "T-Shirt",
        description: "Cotton shirt",
        price: 25.00,
        category: "clothing",
        image: "https://picsum.photos/200?2"
    },
    {
        id: 3,
        name: "JavaScript Book",
        description: "Learn JS",
        price: 40.00,
        category: "books",
        image: "https://picsum.photos/200?3"
    },
    {
        id: 4,
        name: "Camera",
        description: "Security camera",
        price: 120.00,
        category: "electronics",
        image: "https://picsum.photos/200?4"
    },
    {
        id: 5,
        name: "Shoes",
        description: "Running shoes",
        price: 80.00,
        category: "clothing",
        image: "https://picsum.photos/200?5"
    }
];

// ===== CREATE CARD =====
function createProductCard(product) {
    const card = document.createElement("div");
    card.className = "product-card";

    card.innerHTML = `
        <img src="${product.image}" class="product-image">
        <div class="product-info">
            <h3>${product.name}</h3>
            <p>${product.description}</p>
            <p>$${product.price}</p>
            <span>${product.category}</span>
        </div>
    `;

    return card;
}

// ===== DISPLAY PRODUCTS =====
function displayProducts(list) {
    const grid = document.getElementById("product-grid");
    grid.innerHTML = "";

    list.forEach(product => {
        const card = createProductCard(product);
        grid.appendChild(card);
    });

    document.getElementById("resultsCount").textContent =
        `Showing ${list.length} products`;
}

// ===== SEARCH =====
function searchProducts(text) {
    return products.filter(p =>
        p.name.toLowerCase().includes(text.toLowerCase()) ||
        p.description.toLowerCase().includes(text.toLowerCase())
    );
}

// ===== FILTER =====
function filterCategory(list, category) {
    if (category === "all") return list;
    return list.filter(p => p.category === category);
}

// ===== APPLY FILTERS =====
function applyFilters() {
    const text = document.getElementById("searchInput").value;
    const category = document.getElementById("categoryFilter").value;

    let result = searchProducts(text);
    result = filterCategory(result, category);

    displayProducts(result);
}

// ===== CLEAR =====
function clearFilters() {
    document.getElementById("searchInput").value = "";
    document.getElementById("categoryFilter").value = "all";
    displayProducts(products);
}

// ===== EVENTS =====
document.getElementById("searchInput")
    .addEventListener("input", applyFilters);

document.getElementById("categoryFilter")
    .addEventListener("change", applyFilters);

document.getElementById("clearFiltersBtn")
    .addEventListener("click", clearFilters);

// ===== START =====
displayProducts(products);