document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault();

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if( !email || !password ) {
        alert("Fill correct details");
        return;
    }

    let storedDriver = JSON.parse(localStorage.getItem('driver'));

    if(storedDriver && email === storedDriver.email && password === storedDriver.password){

       alert("Login successful");
       
       window.location.href = "../html/driver_dashboard.html";
       
    }else{
       
       alert("Invalid email or password");
       
    }
});