document.addEventListener('DOMContentLoaded', () => {
    checkLoginStatus();
    document.getElementById('productForm').addEventListener('submit', addProduct);
    loadInventoryFromLocalStorage();
});

let inventory = [];

function addProduct(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const description = document.getElementById('description').value;
    const price = document.getElementById('price').value;
    const buyLink = document.getElementById('buyLink').value;
    const photoLink = document.getElementById('photoLink').value;
    const category = document.getElementById('category').value;

    const product = {
        name,
        description,
        price,
        buyLink,
        photoLink,
        category
    };

    inventory.push(product);
    saveInventoryToLocalStorage();
    renderInventory();
    document.getElementById('productForm').reset();
}

function renderInventory() {
    const inventoryTableBody = document.getElementById('inventoryTable').querySelector('tbody');
    inventoryTableBody.innerHTML = '';

    inventory.forEach((product, index) => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.description}</td>
            <td>${product.price}</td>
            <td><a href="${product.buyLink}" target="_blank">Buy Link</a></td>
            <td><a href="${product.photoLink}" target="_blank">Photo Link</a></td>
            <td>${product.category}</td>
            <td class="actions">
                <button class="delete" onclick="deleteProduct(${index})">Delete</button>
            </td>
        `;

        inventoryTableBody.appendChild(row);
    });
}

function deleteProduct(index) {
    inventory.splice(index, 1);
    saveInventoryToLocalStorage();
    renderInventory();
}

function saveInventoryToLocalStorage() {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}

function loadInventoryFromLocalStorage() {
    const storedInventory = localStorage.getItem('inventory');
    if (storedInventory) {
        inventory = JSON.parse(storedInventory);
        renderInventory();
    }
}

function checkLoginStatus() {
    if (localStorage.getItem('isLoggedIn') !== 'true') {
        window.location.href = '../LoginSystem/login.html';
    }
}

function handleLogout() {
    localStorage.removeItem('isLoggedIn');
    window.location.href = '../LoginSystem/login.html';
}

function navigateToMainShop() {
    window.location.href = '../MainShop/main_shop.html';
}
