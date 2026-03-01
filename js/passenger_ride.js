const rides = [
    { from: "Delhi", to: "Chandigarh", date: "2026-03-05", seats: 3, price: 500 },
    { from: "Mumbai", to: "Pune", date: "2026-03-07", seats: 2, price: 400 }
];

document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();

    const fromInput = document.getElementById('fromInput').value;
    const toInput = document.getElementById('toInput').value;
    const date = document.getElementById('dateInput').value;

    // aagr value nhi h toh alert krdega
    if(fromInput === "" || toInput === "" || date === ""){
        alert("Please fill in all fields.");
        return;
    }

    const filteredRides = rides.filter(rider =>
       rider.from.toLowerCase() === fromInput.toLowerCase() &&
       rider.to.toLowerCase() === toInput.toLowerCase() &&
       rider.date === date
    )

    console.log(filteredRides);
    
    if(filteredRides.length === 0){
        alert("No rides available for the selected route and date.");
    } else {
        alert(filteredRides.length + " rides found for your search.");
    }
})