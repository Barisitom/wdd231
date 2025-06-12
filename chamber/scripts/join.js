const message = document.getElementById('visit-message');
const lastVisit = localStorage.getItem('lastVisit');
const hamburgerElement = document.querySelector('#myButton');
const navElement = document.querySelector('.menuLinks');

hamburgerElement.addEventListener('click', () => {
  navElement.classList.toggle('open');
  hamburgerElement.classList.toggle('open');
});


 // Set current date/time to hidden timestamp field
    document.getElementById('timestamp').value = new Date().toISOString();

    // Modal open/close logic
    const buttons = document.querySelectorAll('[data-modal]');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        const modalId = btn.getAttribute('data-modal');
        const modal = document.getElementById(modalId);
        modal.showModal();
      });
    });

    const closeButtons = document.querySelectorAll('.close-modal');
    closeButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        btn.closest('dialog').close();
      });
    });

    // Accessibility: close modal on Esc key
    document.querySelectorAll('dialog').forEach(dialog => {
      dialog.addEventListener('keydown', e => {
        if (e.key === 'Escape') dialog.close();
      });
    });


    // Footer data
  document.getElementById("year").textContent = new Date().getFullYear();
  document.getElementById("lastModified").textContent = document.lastModified;
