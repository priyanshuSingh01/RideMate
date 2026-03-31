document.addEventListener("DOMContentLoaded", function () {

    let rides = JSON.parse(localStorage.getItem('rides')) || [];
    let container = document.getElementById('ridesContainer');

    container.innerHTML = "";

    if (rides.length === 0) {
        let p = document.createElement('p');
        p.textContent = "No rides available. Search to see rides.";
        container.appendChild(p);
        return;
    }

    rides.forEach(ride => {

        // 🔹 Main Card
        let card = document.createElement('div');
        card.classList.add('ride-card');

        // 🔹 Header
        let header = document.createElement('div');
        header.classList.add('ride-header');

        let driverInfo = document.createElement('div');
        let name = document.createElement('h3');
        name.textContent = ride.driverName ;

        let rating = document.createElement('p');
        rating.textContent = "⭐ 4.8 · 127 trips";

        driverInfo.appendChild(name);
        driverInfo.appendChild(rating);

        let priceDiv = document.createElement('div');
        let price = document.createElement('h2');
        price.textContent = "₹" + ride.price;

        let perSeat = document.createElement('span');
        perSeat.textContent = " per seat";

        priceDiv.appendChild(price);
        priceDiv.appendChild(perSeat);

        header.appendChild(driverInfo);
        header.appendChild(priceDiv);

        // 🔹 Body
        let body = document.createElement('div');
        body.classList.add('ride-body');

        let route = document.createElement('div');
        let from = document.createElement('p');
        from.textContent = "From: " + ride.from;

        let to = document.createElement('p');
        to.textContent = "To: " + ride.to;

        route.appendChild(from);
        route.appendChild(to);

        let timeDate = document.createElement('div');
        let time = document.createElement('p');
        time.textContent = "Time: " + (ride.time || "N/A");

        let date = document.createElement('p');
        date.textContent = "Date: " + ride.date;

        timeDate.appendChild(time);
        timeDate.appendChild(date);

        body.appendChild(route);
        body.appendChild(timeDate);

        // 🔹 Footer
        let footer = document.createElement('div');
        footer.classList.add('ride-footer');

        let vehicle = document.createElement('p');
        vehicle.textContent = (ride.vehicleType || "Car") + " " + (ride.vehicleModel || "");

        let seats = document.createElement('p');
        seats.textContent = (ride.seats || 1) + " seats available";

        let btn = document.createElement('button');
        btn.textContent = "Book Now";
        btn.classList.add('book-btn');

        footer.appendChild(vehicle);
        footer.appendChild(seats);
        footer.appendChild(btn);

        // 🔥 Append all
        card.appendChild(header);
        card.appendChild(body);
        card.appendChild(footer);

        container.appendChild(card);
    });

});


