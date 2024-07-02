document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('subscriptionForm').addEventListener('submit', handleSubscription);
});

function handleSubscription(e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for subscribing, ${name}! We'll contact you at ${email} soon.`);
    document.getElementById('subscriptionForm').reset();
}
