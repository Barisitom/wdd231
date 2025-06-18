import { schedule } from "../data/timeTable.js";
import { paymentPackage } from "../data/payment.mjs";
// const message = document.getElementById('visit-message');
// const lastVisit = localStorage.getItem('lastVisit');
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
});


function createScheduleCard(item) {
  const card = document.createElement("div");
  card.className = "schedule-card";

  card.innerHTML = `
    <div class="card-header">
      <h3> ${item.section}</h3>
    </div>
    <div class="card-body">
      <img src="${item.image}" alt="${item.instructor}" loading="lazy">
      <div class="card-info">
        <p><strong>Instructor:</strong> ${item.instructor}</p>
        <p><strong>Fitness Type:</strong> ${item.fitness_type}</p>
        <p><strong>Time:</strong> ${item.time}</p>
        <p><strong>Duration:</strong> ${item.duration}</p>
      </div>
    </div>
  `;
  return card;
}

function displaySchedule() {
  const container = document.getElementById("shedule");
  schedule.forEach(item => {
    const card = createScheduleCard(item);
    container.appendChild(card);
  });
}

displaySchedule();


const paymentSection = document.getElementById("payment");

  const title = document.createElement("h2");
  title.textContent = "Payment Packages";
  title.className = "payment-heading";
  paymentSection.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "payment-grid";

  paymentPackage.forEach(pkg => {
    const card = document.createElement("div");
    card.className = "payment-card";
    card.innerHTML = `
      <img src="${pkg.image}" alt="${pkg.package_type} plan" class="card-img" loading="lazy">
      <h3>${pkg.package_type} Plan</h3>
      <p class="price">${pkg.price}</p>
      <p>${pkg.description}</p>
      <ul>
        <li><strong>Days:</strong> ${pkg.days_per_week}</li>
        <li><strong>Sessions/Day:</strong> ${pkg.sections_per_day}</li>
        <li><strong>Instructors:</strong> ${pkg.instructor_choice}</li>
      </ul>
      <h3 className="click">${pkg.click}</h3>
    `;
    grid.appendChild(card);
    grid.addEventListener('click', () => showDialog(pkg))
  });

  paymentSection.appendChild(grid);

  const closeDialog = document.getElementById('close')
  function showDialog(x) {
    console.log(x)
    mydialog.showModal()
  }

  closeDialog.addEventListener('click', () => {
    mydialog.close()
  })