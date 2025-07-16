const teamMembers = [
    { name: "HTML", role: "Skilled in HTML, proficient in structuring content, defining layout, and creating engaging web experiences, enhancing user interaction and experience." },
    { name: "CSS", role: "Proficient in CSS, adept at styling web content, enhancing layout, and creating visually appealing designs, optimizing user experience." },
    { name: "JavaScript", role: "Proficient in CSS, adept at styling web content, enhancing layout, and creating visually appealing designs, optimizing user experience." },
    { name: "React.js", role: "Proficient in React.js, skilled at building dynamic user interfaces using component-based architecture, managing state effectively, and optimizing application performance for seamless user experiences." },
    { name: "Bootstrap", role: "Adept at using Bootstrap to design responsive and mobile-first layouts, ensuring consistent styling, rapid UI development, and cross-browser compatibility." },
    { name: "Git", role: "Experienced with Git for version control, proficient in managing code repositories, collaborating on projects, and maintaining clean and organized development workflows." },
];

const cards = document.querySelectorAll(".card");
const memberName = document.querySelector(".member-name");
const memberRole = document.querySelector(".member-role");
const leftArrow = document.querySelector(".nav-arrow.left");
const rightArrow = document.querySelector(".nav-arrow.right");
let currentIndex = 0;
let isAnimating = false;

function updateCarousel(newIndex) {
    if (isAnimating) return;
    isAnimating = true;

    currentIndex = (newIndex + cards.length) % cards.length;

    cards.forEach((card, i) => {
        const offset = (i - currentIndex + cards.length) % cards.length;

        card.classList.remove(
            "center",
            "left-1",
            "left-2",
            "right-1",
            "right-2",
            "hidden"
        );

        if (offset === 0) {
            card.classList.add("center");
        } else if (offset === 1) {
            card.classList.add("right-1");
        } else if (offset === 2) {
            card.classList.add("right-2");
        } else if (offset === cards.length - 1) {
            card.classList.add("left-1");
        } else if (offset === cards.length - 2) {
            card.classList.add("left-2");
        } else {
            card.classList.add("hidden");
        }
    });

    memberName.style.opacity = "0";
    memberRole.style.opacity = "0";

    setTimeout(() => {
        memberName.textContent = teamMembers[currentIndex].name;
        memberRole.textContent = teamMembers[currentIndex].role;
        memberName.style.opacity = "1";
        memberRole.style.opacity = "1";
    }, 300);

    setTimeout(() => {
        isAnimating = false;
    }, 800);
}

leftArrow.addEventListener("click", () => {
    updateCarousel(currentIndex - 1);
});

rightArrow.addEventListener("click", () => {
    updateCarousel(currentIndex + 1);
});

cards.forEach((card, i) => {
    card.addEventListener("click", () => {
        updateCarousel(i);
    });
});

document.addEventListener("keydown", (e) => {
    if (e.key === "ArrowLeft") {
        updateCarousel(currentIndex - 1);
    } else if (e.key === "ArrowRight") {
        updateCarousel(currentIndex + 1);
    }
});

let touchStartX = 0;
let touchEndX = 0;

document.addEventListener("touchstart", (e) => {
    touchStartX = e.changedTouches[0].screenX;
});

document.addEventListener("touchend", (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
});

function handleSwipe() {
    const swipeThreshold = 50;
    const diff = touchStartX - touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
        if (diff > 0) {
            updateCarousel(currentIndex + 1);
        } else {
            updateCarousel(currentIndex - 1);
        }
    }
}

updateCarousel(0);
