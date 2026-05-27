const introSection = document.querySelector(".intro");

const introObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-link").forEach((item) => {
                item.classList.remove("active");
            });

            document
                .getElementById("home-link")
                .classList.add("active");
        }

    });
}, {
    threshold: 0.5
});

introObserver.observe(introSection);



//about section animation
const aboutAnimationObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document
                .getElementById("about-img")
                .classList.add("animate-img");

            document
                .getElementById("about-title")
                .classList.add("animate-title");

            document
                .getElementById("about-btn")
                .classList.add("animate-btn");

            aboutAnimationObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

aboutAnimationObserver.observe(document.querySelector(".about-sec"));

const aboutNavObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-link").forEach((item) => {
                item.classList.remove("active");
            });

            document
                .getElementById("about-link")
                .classList.add("active");
        }
    });
}, {
    threshold: 0.5
});

aboutNavObserver.observe(document.querySelector(".about-sec"));

//services section animation
const servicesSection = document.querySelector(".services-sec");

const servicesObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document
                .getElementById("services-title")
                .classList.add("animate-services-title");

            document
                .getElementById("front-end")
                .classList.add("animate-front-end");

            document
                .getElementById("back-end")
                .classList.add("animate-back-end");

            document
                .getElementById("full-stack")
                .classList.add("animate-full-stack");

            servicesObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

servicesObserver.observe(servicesSection);

const servicesNavObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-link").forEach((item) => {
                item.classList.remove("active");
            });

            document
                .getElementById("services-link")
                .classList.add("active");
        }
    });
}, {
    threshold: 0.3
});

servicesNavObserver.observe(servicesSection);

//skills section animation
const skillsSection = document.querySelector(".skills-details");

const skillsObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document
                .getElementById("skills-title")
                .classList.add("animate-skills-title");

            document
                .getElementById("skills-btn")
                .classList.add("animate-skills-btn");

            document
                .getElementById("skill-1")
                .classList.add("animate-skill-1");

            document
                .getElementById("skill-2")
                .classList.add("animate-skill-2");

            document
                .getElementById("skill-3")
                .classList.add("animate-skill-3");

            document
                .getElementById("skill-4")
                .classList.add("animate-skill-4");

            skillsObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

skillsObserver.observe(skillsSection);

const skillsNavObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-link").forEach((item) => {
                item.classList.remove("active");
            });

            document
                .getElementById("skills-link")
                .classList.add("active");
        }
    });
}, {
    threshold: 0.3
});

skillsNavObserver.observe(skillsSection);

//portfolio section animation
const portfolioSection = document.querySelector(".portfolio-sec");

const portfolioObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document
                .getElementById("portfolio-sec")
                .classList.add("animate-portfolio-sec");

            document
                .querySelectorAll(".portfolio-img")
                .forEach((img)=>{
                    img.classList.add("animate-portfolio-img");
                })
                
           portfolioObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

portfolioObserver.observe(portfolioSection);

const portfolioNavObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document.querySelectorAll(".nav-link").forEach((item) => {
                item.classList.remove("active");
            });

            document
                .getElementById("portfolio-link")
                .classList.add("active");
        }
    });
}, {
    threshold: 0.3
});

portfolioNavObserver.observe(portfolioSection);

//contact section animation
const contactSection = document.querySelector(".contact-sec");

const contactObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {

        if (entry.isIntersecting) {

            document
                .getElementById("contact-sec")
                .classList.add("animate-contact-sec");

            document
                .getElementById("contact-form")
                .classList.add("animate-contact-form");

            contactObserver.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.3
});

contactObserver.observe(contactSection);


//form section
// Wait for the HTML DOM and all external resources to fully load
document.addEventListener('DOMContentLoaded', function () {

    // 1. Initialize EmailJS inside the wrapper so we know 'emailjs' is defined
    // REPLACE 'YOUR_PUBLIC_KEY' with the key from your EmailJS Account tab
    emailjs.init("vxOL59DLT4UVCx622");

    const contactForm = document.getElementById('contact-form');

    // Verify the form exists on the current page
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            // Prevent the browser from reloading the page
            event.preventDefault();

            // Visual feedback for the user
            const btn = this.querySelector('button');
            btn.textContent = 'Sending...';

            // 2. Send the form data via EmailJS
            // REPLACE 'YOUR_SERVICE_ID' with the ID from your Email Services tab
            emailjs.sendForm('service_1tzrcpn', 'template_oe1ime1', this)
                .then(function () {
                    alert('Message sent successfully!');
                    btn.textContent = 'Send Message';
                    contactForm.reset(); // Clears the input fields
                }, function (error) {
                    alert('Failed to send. Error: ' + JSON.stringify(error));
                    btn.textContent = 'Send Message';
                });
        });
    } else {
        console.error("Could not find an HTML element with id='contact-form'. Please check your HTML file!");
    }
});