
const bookingForm = document.getElementById("bookingForm");

document.getElementById("year").textContent = new Date().getFullYear();

// Prevent choosing a past journey date.
const dateInput = document.getElementById("date");

const today = new Date();
const localDate =
  today.getFullYear() + "-" +
  String(today.getMonth() + 1).padStart(2, "0") + "-" +
  String(today.getDate()).padStart(2, "0");

dateInput.min = localDate;

// Select the car automatically when a car card is clicked.
document.querySelectorAll(".car-link").forEach(function(link) {
  link.addEventListener("click", function() {
    const selectedCar = this.dataset.car;
    document.getElementById("car").value = selectedCar;
  });
});

// Send booking enquiry through WhatsApp.
bookingForm.addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const car = document.getElementById("car").value;
  const service = document.getElementById("service").value;
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value.trim();

  if (!/^[0-9]{10}$/.test(phone)) {
    alert("Please enter a valid 10-digit phone number.");
    return;
  }

  const bookingMessage =
    "Hello Vasanth Car Rentals! I would like to enquire about a booking.\n\n" +
    "Name: " + name + "\n" +
    "Customer Phone: " + phone + "\n" +
    "Car: " + car + "\n" +
    "Service: " + service + "\n" +
    "Pickup Location: " + pickup + "\n" +
    "Destination: " + destination + "\n" +
    "Journey Date: " + date + "\n" +
    "Additional Details: " + (message || "None");

  const whatsappURL =
    "https://wa.me/919573373015?text=" +
    encodeURIComponent(bookingMessage);

  window.open(whatsappURL, "_blank", "noopener,noreferrer");
});
