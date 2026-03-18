document.addEventListener("DOMContentLoaded", function () {

    fetch("nav.html") 
        .then(response => response.text())
        .then(data => {
            let navbar = document.getElementById("navbar");

            if (navbar) {
                navbar.innerHTML = data;
            } else {
                console.log("Navbar div not found ❌");
            }
        })
        .catch(error => console.log("Error loading navbar:", error));

});