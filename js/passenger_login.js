
document.getElementById('loginform').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("Login form submitted");

    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;

    if( !email || !password ) {
        alert("Fill correct details");
        return;
    }

    let storedPassenger = JSON.parse(localStorage.getItem('passenger'));

    console.log(storedPassenger);
    console.log("Entered email:", email);
    console.log("Entered password:", password);

    if(storedPassenger && email === storedPassenger.email && password === storedPassenger.password){

       alert("Login successful");
       
       window.location.href = "passenger_ride.html";
       
    }else{
       
       alert("Invalid email or password");
       
    }
});