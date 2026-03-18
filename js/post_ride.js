// document.getElementById('postRideForm').addEventListener('submit', function(e) {
//     e.preventDefault();

//     console.log("Form submitted ✅");

//     let from = document.getElementById('from').value;
//     let to = document.getElementById('to').value;
//     let pickup = document.getElementById('pickup').value;
//     let date = document.getElementById('date').value;
//     let time = document.getElementById('time').value;
//     let vehicleType = document.getElementById('vehicleType').value;
//     let vehicleModel = document.getElementById('vehicleModel').value;
//     let seats = document.getElementById('seats').value;
//     let price = document.getElementById('price').value;

//     if(!from || !to || !pickup || !date || !time || !vehicleType || !vehicleModel || !seats || !price) {
//         alert('Please fill in all fields');
//         return;
//     }

//     let ride = {
//         form,
//         to,
//         pickup,
//         date,
//         time,
//         vehicleType,
//         vehicleModel,
//         seats,
//         price
//     }

//         let rides = JSON.parse(localStorage.getItem('rides')) || [];
//         rides.push(ride);
//         localStorage.setItem('rides', JSON.stringify(rides));
//         console.log("Saved rides:", rides);

        
//         alert('Ride posted successfully!');
//         document.getElementById('postRideForm').reset();

//         // this.reset();
// });


document.getElementById('postRideForm').addEventListener('submit', function(e) {
    e.preventDefault();

    console.log("Form submitted ✅");

    let from = document.getElementById('from').value;
    let to = document.getElementById('to').value;
    let date = document.getElementById('date').value;
    let price = document.getElementById('price').value;

    let ride = { from, to, date, price };

    let rides = JSON.parse(localStorage.getItem('rides')) || [];

    rides.push(ride);

    localStorage.setItem('rides', JSON.stringify(rides));

    console.log("Saved rides:", rides);

    this.reset(); // ✅ yahi fix hai
});