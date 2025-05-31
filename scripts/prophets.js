const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

// Fetch data and display it
async function getProphetData() {
  const response = await fetch(url);        // Make the network request
  const data = await response.json();       // Parse JSON response
  // console.table(data.prophets);         // Uncomment for debugging
  displayProphets(data.prophets);           // Pass the prophets array to display function
}

getProphetData();

// Function to display the prophets on the page
const displayProphets = (prophets) => {
  prophets.forEach((prophet) => {
    // Create elements for card
    const card = document.createElement('section');
    const fullName = document.createElement('h2');
    const birthDate = document.createElement('p');
    const birthPlace = document.createElement('p');
    const portrait = document.createElement('img');

    // Set content and attributes
    fullName.textContent = `${prophet.name} ${prophet.lastname}`;
    birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
    birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    // Append elements to the card
    card.appendChild(fullName);
    card.appendChild(birthDate);
    card.appendChild(birthPlace);
    card.appendChild(portrait);

    // Append card to the cards container
    cards.appendChild(card);
  });
};
