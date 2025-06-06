// script.js

const hamburgerElement = document.querySelector('#menuToggle');
const navElement = document.querySelector('#menu');

hamburgerElement.addEventListener('click', () =>{
    navElement.classList.toggle('open');
    hamburgerElement.classList.toggle('open');
    
})

document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;

document.getElementById('grid-view').addEventListener('click', () => {
  document.getElementById('members').classList.add('grid-view');
  document.getElementById('members').classList.remove('list-view');
});

document.getElementById('list-view').addEventListener('click', () => {
  document.getElementById('members').classList.add('list-view');
  document.getElementById('members').classList.remove('grid-view');
});

async function loadMembers() {
  const response = await fetch('data/member.json');
  const data = await response.json();

  const membersContainer = document.getElementById('members');
  data.members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name} logo">
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visit Website</a>
    `;

    membersContainer.appendChild(card);
  });
}

loadMembers();
