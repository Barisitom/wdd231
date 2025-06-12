// Visit message logic


const message = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
});

const now = Date.now();

if (!lastVisit) {
  message.textContent = "Welcome! Let us know if you have any questions.";
} 
else {
  const days = Math.floor((now - Number(lastVisit)) / (1000 * 60 * 60 * 24));
  if (days < 1) {
    message.textContent = "Back so soon! Awesome!";
  } else {
    message.textContent = `You last visited ${days} day${days === 1 ? '' : 's'} ago.`;
  }
}

localStorage.setItem('lastVisit', now);

// Load cards
fetch('data/discover.json')
  .then(response => response.json())
  .then(data => {
    const container = document.getElementById('discover-cards');
    data.forEach(item => {
      const card = document.createElement('div');
      card.className = 'card';
      card.innerHTML = `
        <h2>${item.title}</h2>
        
        <address>${item.address}</address>
        <p>${item.description}</p>
        <button>Learn More</button>
      `;
      container.appendChild(card);
    });
  });
