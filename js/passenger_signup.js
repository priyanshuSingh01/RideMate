document.getElementById('passengerSignupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let phone = document.getElementById('phone').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmPassword').value;

    if (!name || !email || !phone || !password || !confirmPassword) {
        alert("Please fill all fields");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match");
        return;
    }

    let passenger = {
        name,
        email,
        phone,
        password
    };

    localStorage.setItem('passenger', JSON.stringify(passenger));

    alert("Account Created Successfully 🚀");

    window.location.href = "passenger_login.html";
});