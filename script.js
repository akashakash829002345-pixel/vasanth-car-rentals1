
document.getElementById("year").textContent =
  new Date().getFullYear();

document.getElementById("bookingForm").addEventListener("submit", function(event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const service = document.getElementById("service").value;
  const pickup = document.getElementById("pickup").value.trim();
  const destination = document.getElementById("destination").value.trim();
  const date = document.getElementById("date").value;
  const message = document.getElementById("message").value.trim();

  if (!name || !phone || !service || !pickup || !destination || !date) {
    alert("Please fill in all required fields.");
    return;
  }

  const text = `Hello Vasanth Car Rentals!

I want to book a car.

Name: ${name}
Phone: ${phone}
Service: ${service}
Pickup: ${pickup}
Destination: ${destination}
Journey Date: ${date}
Additional Requirements: ${message}

Please share the availability and rental price.`;

  const whatsappURL =
    "https://wa.me/919573373015?text=" + encodeURIComponent(text);

  window.open(whatsappURL, "_blank");
});
