const hamburgerElement = document.querySelector('#menuToggle');
const navElement = document.querySelector('#menu');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
    
})


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
     // console.log(data); // for testing
       displayResults(data); // Uncomment when ready to use
    } else {
      throw Error(await response.text());
    }
  } catch (error) {
    console.log(error);
  }
}

apiFetch();

// Dispay JSON data into my web page
function displayResults(data) {
    myTown.innerHTML = data.name
    myDescription.innerHTML = data.weather[0].description;
    myTemperature.innerHTML = `${data.main.temp}&deg:F`;
    myHumidity.innerHTML = `${data.main.humidity}&deg:F`
    mySunrise.innerHTML = `${data.sys.sunrise}`
    mySunset.innerHTML = `${data.sys.sunset}`
    myTemHigh.innerHTML = `${data.main.temp_max} &deg:F`
    myTemLow.innerHTML = `${data.main.temp_min} &deg:F`
    const iconsrc =  `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
    myGraphic.setAttribute('SRC', iconsrc);
    myGraphic.setAttribute('alt', data.weather[0].description);
}


const showcase = document.querySelector('.business-showcase');

async function loadMembers() {
  try {
    const response = await fetch('data/members.json');
    if (!response.ok) throw new Error('Failed to fetch member data.');
    const members = await response.json();
    displayMembers(members);
  } catch (error) {
    console.error('Error loading members:', error);
  }
}

function displayMembers(members) {
  showcase.innerHTML = ''; // Clear existing content

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('business-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" />
      <h4>${member.name}</h4>
      <p>${getMembershipLevel(member.membership)}</p>
      <p><strong>Email:</strong> ${member.Email}</p>
      <p><strong>Phone:</strong> ${member.phone}</p>
      <p><strong>URL:</strong> <a href="${member.website}" target="_blank">${member.website}</a></p>
    `;

    showcase.appendChild(card);
  });
}

function getMembershipLevel(level) {
  switch (level) {
    case 1: return 'Member';
    case 2: return 'Silver Member';
    case 3: return 'Gold Member';
    default: return 'Member';
  }
}

loadMembers();


// Footer data
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;

