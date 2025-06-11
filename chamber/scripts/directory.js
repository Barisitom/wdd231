const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
});

const gridViewBtn = document.getElementById('grid-view');
const listViewBtn = document.getElementById('list-view');
const membersSection = document.getElementById('members');

gridViewBtn.addEventListener('click', () => {
  membersSection.classList.add('grid-view');
  membersSection.classList.remove('list-view');
});

listViewBtn.addEventListener('click', () => {
  membersSection.classList.add('list-view');
  membersSection.classList.remove('grid-view');
});

async function loadMembers() {
  try {
    const response = await fetch('data/member.json');
    const data = await response.json();

    data.members.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('member-card');

      card.innerHTML = `
        <h3>${member.name}</h3>
        <p>${member.address}</p>
        <p>${member.phone}</p>
        <a href="${member.website}" target="_blank">Visit Website</a>
      `;

      membersSection.appendChild(card);
    });
  } catch (error) {
    console.error('Failed to load members:', error);
  }
}

loadMembers();

// Footer dynamic content
document.getElementById('year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = document.lastModified;
