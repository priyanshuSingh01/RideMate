// temporary data for passengers
const passengers = [
    { email: "rahul@gmail.com", password: "1234", name: "Rahul", role: "passenger" },
    { email: "amit@gmail.com", password: "1234", name: "Amit", role: "passenger" }
];

// Login Function (Passenger)
document.getElementById("loginForm").addEventListener("submit",function(e) {
    e.preventDefault();

    const email = document.querySelector("input[name='username']").value;
    const password = document.querySelector("input[name='password']").value;

    const user = passengers.find(p => 
        p.email === email && p.password === password
    );

    if(user){
        // loginn data store kra h mene
        localStorage.setItem("user", JSON.stringify(user));

        // redirect krdega passenger ride page pr
        window.location.href = "../html/passenger_ride.html";

    }else{
        alert("Invalid email or password. Please try again.");
    }
});