// course.js - Course data and filtering
const courses = [
    { code: "CSE 110", name: "Introduction to Programming", category: "CSE", completed: true },
    { code: "WDD 130", name: "Web Development Basics", category: "WDD", completed: true },
    { code: "CSE 210", name: "Object-Oriented Programming", category: "CSE", completed: false },
    { code: "WDD 131", name: "Advanced Web Development", category: "WDD", completed: true },
    { code: "WDD 231", name: "Web Programming II", category: "WDD", completed: false }
];

function displayCourses(filter = "All") {
    const courseContainer = document.getElementById("courses");
    courseContainer.innerHTML = "";

    courses.filter(course => filter === "All" || course.category === filter)
        .forEach(course => {
            const courseDiv = document.createElement("div");
            courseDiv.textContent = `${course.code} - ${course.name}`;
            courseDiv.className = course.completed ? "completed" : "pending";
            courseContainer.appendChild(courseDiv);
        });
}

displayCourses();

function showAll() { displayCourses("All"); }
function showCSE() { displayCourses("CSE"); }
function showWDD() { displayCourses("WDD"); }


// date.js - Display current year and last modified date
document.getElementById("currentYear").textContent = new Date().getFullYear();
document.getElementById("lastModified").textContent = "Last Update: " + document.lastModified;
