document.addEventListener('DOMContentLoaded', () => {
  const menuToggle = document.getElementById('menu-toggle');
  const navbar = document.getElementById('navbar');
  menuToggle.addEventListener('click', () => {
    navbar.classList.toggle('active');
  });

  document.getElementById('currentyear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = `Last Update: ${document.lastModified}`;

  renderCourses('all');
});

const courses = [
  { code: 'CSE 110', name: 'Intro to Programming', credits: 3, category: 'CSE', completed: true },
  { code: 'WDD 130', name: 'Web Fundamentals', credits: 3, category: 'WDD', completed: true },
  { code: 'CSE 111', name: 'Programming with Functions', credits: 3, category: 'CSE', completed: true },
  { code: 'CSE 210', name: 'Object-Oriented Programming', credits: 3, category: 'CSE', completed: false },
  { code: 'WDD 131', name: 'Dynamic Web Pages', credits: 3, category: 'WDD', completed: true },
  { code: 'WDD 231', name: 'Front-end Frameworks', credits: 3, category: 'WDD', completed: false }
];

function renderCourses(filter) {
  const container = document.getElementById('courses-container');
  container.innerHTML = '';
  let filtered = courses;

  if (filter !== 'all') {
    filtered = courses.filter(course => course.category === filter);
  }

  let totalCredits = 0;

  filtered.forEach(course => {
    const div = document.createElement('div');
    div.className = `course ${course.completed ? 'completed' : 'incomplete'}`;
    div.innerHTML = `<strong>${course.code}</strong><br>${course.name}`;
    container.appendChild(div);

    totalCredits += course.credits;
  });

  document.getElementById('total-credits').textContent = totalCredits;
}

function filterCourses(type) {
  renderCourses(type);
}
