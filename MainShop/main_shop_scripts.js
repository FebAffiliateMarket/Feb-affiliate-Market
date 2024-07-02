function subscribe() {
    alert('Thank you for your interest! Please fill out the subscription form.');
    window.location.href = '../Subscription/subscription_form.html';
}

function navigateToLogin() {
    window.location.href = '../LoginSystem/login.html';
}

document.addEventListener('DOMContentLoaded', () => {
    loadProducts();
});

function loadProducts() {
    const storedInventory = localStorage.getItem('inventory');
    if (storedInventory) {
        const inventory = JSON.parse(storedInventory);
        const productGrid = document.getElementById('productGrid');

        inventory.forEach(product => {
            const productItem = document.createElement('div');
            productItem.classList.add('product-item');

            productItem.innerHTML = `
                <img src="${product.photoLink}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <p>$${product.price}</p>
                <a href="${product.buyLink}" target="_blank">Buy Now</a>
            `;

            productGrid.appendChild(productItem);
        });
    }
}
