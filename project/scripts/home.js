import { fitness } from "../data/fitness.js";
import { instructor } from "../data/instructors.js";
import { successStories } from "../data/sucess.mjs";

const showType = document.querySelector('#showType');
const showgoal = document.querySelector('#showgoal');
const showDuration = document.querySelector('#showDuration');

const message = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
});

const fitnessContainer = document.getElementById("showFitness");
fitness.forEach((item) => {
  const card = document.createElement("div");
  card.className = "fitness-card";
  card.innerHTML = `
    <img src="${item.image}" alt="${item.type}" loading="lazy">
    <div class="info">
      <h3>${item.type}</h3>
      <p><strong>Goal:</strong> ${item.goal}</p>
      <p><strong>Duration:</strong> ${item.duration}</p>
    </div>
  `;
  fitnessContainer.appendChild(card);
});

const instructorContainer = document.getElementById("instructor");
instructor.forEach((person) => {
  const card = document.createElement("div");
  card.className = "instructor-card";
  card.innerHTML = `
    <img src="${person.image}" alt="${person.name}" loading="lazy">
    <div class="info">
      <h3>${person.name}</h3>
      <p>${person.qualification}</p>
      <p><strong>Experience:</strong> ${person.experience} years</p>
    </div>
  `;
  instructorContainer.appendChild(card);
});

const successContainer = document.getElementById("successStories");
successStories.forEach((story) => {
  const card = document.createElement("div");
  card.className = "success-card";
  card.innerHTML = `
    <img src="${story.image}" alt="${story.name}" loading="lazy">
    <div class="info">
      <h3>${story.name}</h3>
      <p class="quote">"${story.success_story}"</p>
      <p><strong>Duration:</strong> ${story.duration}</p>
    </div>
  `;
  successContainer.appendChild(card);
});

// Weather coding section
const myTown = document.querySelector('#town');
const myDescription = document.querySelector('#description');
const myTemperature = document.querySelector('#temperature');
const myHumidity = document.querySelector('.humidity');
const mySunrise = document.querySelector('.sunrise');
const mySunset = document.querySelector('.sunset');
const myTemHigh = document.querySelector('#temhigh');
const myTemLow = document.querySelector('#temlow');
const myGraphic = document.querySelector('#graphic');

const myKey = "61a5584802136c90a35dfc73bdd7b7b0";
const myLat = "4.8490548795411295";
const myLong = "6.972180888108137";

const myURL = `https://api.openweathermap.org/data/2.5/weather?lat=${myLat}&lon=${myLong}&appid=${myKey}&units=imperial`;

async function apiFetch() {
  try {
    const response = await fetch(myURL);
    if (response.ok) {
      const data = await response.json();
      displayResults(data);
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    // Optionally log errors during development
    // console.error(error);
  }
}

apiFetch();

// Display JSON data into my web page
function displayResults(data) {
  myTown.innerHTML = data.name;
  myDescription.innerHTML = data.weather[0].description;
  myTemperature.innerHTML = `${data.main.temp}&deg;F`;
  myHumidity.innerHTML = `${data.main.humidity}%`;
  mySunrise.innerHTML = `${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}`;
  mySunset.innerHTML = `${new Date(data.sys.sunset * 1000).toLocaleTimeString()}`;
  myTemHigh.innerHTML = `${data.main.temp_max} &deg;F`;
  myTemLow.innerHTML = `${data.main.temp_min} &deg;F`;
  const iconsrc = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
  myGraphic.setAttribute('src', iconsrc);
  myGraphic.setAttribute('alt', data.weather[0].description);
}
