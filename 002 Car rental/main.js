// Menu
let menu = document.querySelector(".menu-icon");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
  menu.classList.toggle("move");
  navbar.classList.toggle("open-menu");
};
// Close Menu On Page Scroll
window.onscroll = () => {
  menu.classList.remove("move");
  navbar.classList.remove("open-menu");
};
// Input Form Date
window.onload = () => {
  let today = new Date().toISOString().split("T")[0];
  document.getElementById("start-date").value = today;
  document.getElementById("return-date").value = new Date(
    Date.now() + 7 * 86400000
  )
    .toISOString()
    .split("T")[0];
};
// Scroll Reveal Animation
const animate = ScrollReveal({
  origin: "top",
  distance: "60px",
  duration: "2500",
  delay: "400",
});

animate.reveal(".nav,.heading");
animate.reveal(".home-img img", { origin: "right" });
animate.reveal(".input-form", { origin: "bottom" });
animate.reveal(".trend-box,.rental-box,.team-box,.t-box,.newsletter", {
  interval: 100,
});

const carouselTrack = document.querySelector('.carousel-track');
const logos = Array.from(carouselTrack.children);
const containerWidth = document.querySelector('.carousel-container').offsetWidth;

// Duplicate the logos until the track is wide enough to cover the container twice
while (carouselTrack.scrollWidth < containerWidth * 2) {
  logos.forEach(logo => {
    const clone = logo.cloneNode(true);
    clone.setAttribute('aria-hidden', true); // Mark cloned elements as hidden for accessibility
    carouselTrack.appendChild(clone);
  });
}

// Calculate the total width of the carousel track after duplicating logos
const totalWidth = carouselTrack.scrollWidth;

// Set the animation duration dynamically based on the total width
const animationDuration = totalWidth / 150; // Adjust divisor to control speed

// Apply the animation using inline style
carouselTrack.style.animation = `scroll-left ${animationDuration}s linear infinite`;


// Car data
const cars = {
  Ghost: {
    image: "img/rental-1.png",
    price: "$300.00",
    model: "Roadster",
    doors: "2",
    seats: "4",
    transmission: "Automatic",
  },
  GTR: {
    image: "img/rental-4.png",
    price: "$200.00",
    model: "Coupe",
    doors: "2",
    seats: "2",
    transmission: "Manual",
  },
  Panamera: {
    image: "img/rental-5.png",
    price: "$160.00",
    model: "Saloon",
    doors: "4",
    seats: "5",
    transmission: "Automatic",
  },
  X5: {
    image: "img/rental-6.png",
    price: "$100.00",
    model: "Sedan",
    doors: "4",
    seats: "5",
    transmission: "Automatic",
  },
  Cayenne: {
    image: "img/rental-7.png",
    price: "$110.00",
    model: "SUV",
    doors: "4",
    seats: "5",
    transmission: "Manual",
  },
  Boxster: {
    image: "img/rental-8.png",
    price: "$170.00",
    model: "Roadster",
    doors: "2",
    seats: "2",
    transmission: "Automatic",
  }
};

// DOM elements
const modelTabs = document.querySelectorAll(".model-tab");
const carImage = document.getElementById("car-image");
const carPrice = document.getElementById("car-price");
const carModel = document.getElementById("car-model");
const carDoors = document.getElementById("car-doors");
const carSeats = document.getElementById("car-seats");
const carTransmission = document.getElementById("car-transmission");

// Function to update car details
function updateCarDetails(car) {
  carImage.src = car.image;
  carPrice.textContent = car.price;
  carModel.textContent = car.model;
  carDoors.textContent = car.doors;
  carSeats.textContent = car.seats;
  carTransmission.textContent = car.transmission;
}

// Event listener for each model tab
modelTabs.forEach(tab => {
  tab.addEventListener("click", () => {
    // Remove active class from all tabs and add to clicked tab
    modelTabs.forEach(t => t.classList.remove("active"));
    tab.classList.add("active");

    // Get the selected model's data and update car details
    const selectedModel = tab.dataset.model;
    updateCarDetails(cars[selectedModel]);
  });
});

document.querySelectorAll('.faq-question').forEach(question => {
  question.addEventListener('click', () => {
    const faqItem = question.parentElement;
    const faqAnswer = faqItem.querySelector('.faq-answer');
    const toggleIcon = question.querySelector('.toggle-icon');

    // Toggle the active state
    faqItem.classList.toggle('active');

    // Set height for smooth transition
    if (faqItem.classList.contains('active')) {
      faqAnswer.style.height = `${faqAnswer.scrollHeight}px`;
      toggleIcon.textContent = "–"; // Change icon to "–" when expanded
    } else {
      faqAnswer.style.height = `0`; // Collapse smoothly
      toggleIcon.textContent = "+"; // Change icon to "+" when collapsed
    }
  });
});

const testimonialContainer = document.querySelector('.testimonial-cards-container');
const dots = document.querySelectorAll('.dot');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

let currentIndex = 0;

function updateSlider(index) {
  currentIndex = (index + dots.length) % dots.length;  // Wrap around the index
  testimonialContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
  dots.forEach(dot => dot.classList.remove('active'));
  dots[currentIndex].classList.add('active');
}

// Dot navigation
dots.forEach((dot, index) => dot.addEventListener('click', () => updateSlider(index)));

// Button navigation
prevBtn.addEventListener('click', () => updateSlider(currentIndex - 1));
nextBtn.addEventListener('click', () => updateSlider(currentIndex + 1));



