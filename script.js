const params = new URLSearchParams(window.location.search);

// Passenger Details
const passengerName = params.get("name") || "N/A";
const email = params.get("email") || "N/A";
const phone = params.get("phone") || "N/A";

// Journey Details
const source = params.get("source") || "N/A";
const destination = params.get("destination") || "N/A";
const journey = params.get("journey") || "N/A";

// Ticket Details
const bookingId = params.get("bookingId") || "N/A";
const passengers = params.get("passengers") || "1";
const fare = params.get("fare") || "0";
const status = params.get("status") || "Pending";
const payment = params.get("payment") || "Pending";

// Fill Details
document.getElementById("name").textContent = passengerName;
document.getElementById("email").textContent = email;
document.getElementById("phone").textContent = phone;

document.getElementById("source").textContent = source;
document.getElementById("destination").textContent = destination;
document.getElementById("journey").textContent = journey;

document.getElementById("bookingId").textContent = bookingId;
document.getElementById("passengers").textContent = passengers;
document.getElementById("fare").textContent = "₹ " + fare;
document.getElementById("status").textContent = status;
document.getElementById("payment").textContent = payment;

// Use the same QR that opened this page
const currentURL = window.location.href;

document.getElementById("ticketQR").src =
    "https://api.qrserver.com/v1/create-qr-code/?size=250x250&data=" +
    encodeURIComponent(currentURL);

// Home Button
function goHome() {

    window.location.href =
        "https://github.com";

}
