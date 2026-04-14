const menu = document.getElementById("megaMenu");
const items = document.querySelectorAll(".headtbox");

// Content for each menu
const content = {
  mne: `
    <div class="mega-menu-inner">
      <div class="mega-menu-column">
        <h2>Meetings & Events</h2>
        <p>Weddings</p>
        <p>Corporate Events</p>
        <p>Private Parties</p>
      </div>
    </div>
  `,
  accom: `
    <div class="mega-menu-inner">
      <div class="mega-menu-column">
        <h2>Accommodation</h2>
        <p>Deluxe Rooms</p>
        <p>Suites</p>
        <p>Family Villas</p>
      </div>
    </div>
  `,
  gallery: `
    <div class="mega-menu-inner">
      <div class="mega-menu-column">
        <h2>Gallery</h2>
        <p>Resort Photos</p>
        <p>Events</p>
      </div>
    </div>
  `,
  ttd: `
    <div class="mega-menu-inner">
      <div class="mega-menu-column">
        <h2>Things To Do</h2>
        <p>Swimming</p>
        <p>Spa</p>
        <p>Outdoor Activities</p>
      </div>
    </div>
  `,
  about: `
    <div class="mega-menu-inner">
      <div class="mega-menu-column">
        <h2>About & Contact</h2>
        <p>Our Story</p>
        <p>Contact Info</p>
      </div>
    </div>
  `
};

// Show menu on hover
items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    const type = item.getAttribute("data-menu");
    menu.innerHTML = content[type] || "";
    menu.style.display = "block";
  });
});

// Hide when leaving header
const header = document.querySelector(".head");

if (header) {
  header.addEventListener("mouseleave", () => {
    menu.style.display = "none";
  });
}

function bookNow() {
  const checkin = document.getElementById("checkin").value;
  const checkout = document.getElementById("checkout").value;
  const room = document.getElementById("roomType").value;
  const amenities = document.getElementById("amenities").value;
  const status = document.getElementById("booking-status");

  if (!checkin || !checkout) {
    status.textContent = "Please select check-in and check-out dates.";
    status.style.color = "red";
    return;
  }

  if (checkout <= checkin) {
    status.textContent = "Check-out must be after check-in.";
    status.style.color = "red";
    return;
  }

  if (!room) {
    status.textContent = "Please select a room type.";
    status.style.color = "red";
    return;
  }

  status.textContent = `Booking Ready: ${room} with ${amenities || "no extra amenities"}`;
  status.style.color = "green";
}
