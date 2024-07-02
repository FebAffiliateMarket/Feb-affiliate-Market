document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
});

function handleLogin(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    if (username === 'admin' && password === 'password') {
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = '../Inventory/Inventory.html';
    } else {
        alert('Invalid username or password');
    }
}
