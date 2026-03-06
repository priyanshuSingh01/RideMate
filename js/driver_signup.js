document.getElementById('signupForm').addEventListener('submit', function(e) {
    e.preventDefault();

    let name = document.getElementById('name').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let confirmPassword = document.getElementById('confirmpassword').value;

    if( password !== confirmPassword ) {
        alert("Passwords do not match");
        return;
    }

    let driver = {
        email: email,
        password: password
    };

    localStorage.setItem('driver', JSON.stringify(driver));

    alert("Account created successfully");
    window.location.href = "../html/driver_login.html";
})