/* ------ NAVIGATION BAR FUNCTION ------ */
function myMenuFunction(){
   var menuBtn = document.getElementById("myNavMenu");
   
   if(menuBtn.className === "nav-menu")
   {
      menuBtn.className += " responsive";
   }
   else
   {
      menuBtn.className = "nav-menu";
   }
}

/* ------ ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ------ */
window.onscroll = function(){headerShadow()};

function headerShadow(){
   const navHeader = document.getElementById("header");

   if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
   {
      navHeader.style.boxShadow = "0 1px 6px rgba(0,0,0,0.1)";
      navHeader.style.height = "70px";
      navHeader.style.lineHeight = "70px";
   }
   else
   {
      navHeader.style.boxShadow = "none";
      navHeader.style.height = "90px";
      navHeader.style.lineHeight = "90px";
   }
}

/* ------ TYPING EFFECT ------ */
var typingEffect = new Typed(".typedText",{
   strings : ["Developer"],
   loop : true,
   typeSpeed : 100,
   backSpeed : 80,
   backDelay : 2000
})


/* ---- SCROLL REVEAL ANIMATION ---- */
const sr = ScrollReveal({
   origin: "top",
   distance: "80px",
   duration: 2000,
   reset: true
})


/* ---- HOME ---- */
sr.reveal(".featured-text-card",{})
sr.reveal(".featured-name",{delay: 100})
sr.reveal(".featured-text-info",{delay: 200})
sr.reveal(".featured-text-btn",{delay: 200})
sr.reveal(".social_icons",{delay: 200})
sr.reveal(".featured-image",{delay: 300})

/* ---- PROJECT BOX ---- */
sr.reveal(".project-box",{interval:200})

/* ---- HEADINGS ---- */
sr. reveal('.top-header',{})

/* ---- ABOUT INFO & CONTACT INFO ---- */
const srLeft = ScrollReveal({
   origin: "left",
   distance: "80px",
   duration: 2000,
   reset: true
})

srLeft.reveal(".about-info",{delay: 100})
srLeft.reveal(".contact-info",{delay: 100})

/* ---- ABOUT SKILLS ---- */
const srRight = ScrollReveal({
   origin: "right",
   distance: "80px",
   duration: 2000,
   reset: true
})

srRight.reveal(".skills-box",{delay: 100})
srRight.reveal(".form-control",{delay: 100})

/* ---- CHANGE ACTIVE LINK ---- */
const section = document.querySelectorAll("section[id]")

function scrollActive(){
   const scrollY = window.scrollY;

   section.forEach(current =>{
      const sectionHeight = current.offsetHeight,
         sectionTop = current.offsetTop -50,
         sectionId = current.getAttribute("id");

         if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight)
         {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.add("active-link")
         }
         else
         {
            document.querySelector(".nav-menu a[href*=" + sectionId + "]").classList.remove("active-link")
         }

   })
}

// Tema değiştirme işlevi
function toggleTheme() {
   const body = document.body;
   const themeIcon = document.getElementById('theme-icon');

   // Toggle the 'dark-theme' class on the body
   body.classList.toggle('dark-theme');

   // Change icon based on theme
   if (body.classList.contains('dark-theme')) {
       themeIcon.classList.replace('bx-sun', 'bx-moon'); // Switch icon to moon for dark mode
       localStorage.setItem('theme', 'dark'); // Save dark theme to localStorage
   } else {
       themeIcon.classList.replace('bx-moon', 'bx-sun'); // Switch icon to sun for light mode
       localStorage.setItem('theme', 'light'); // Save light theme to localStorage
   }
}

// Sayfa yüklendiğinde temayı ayarlama
function applySavedTheme() {
   const body = document.body;
   const themeIcon = document.getElementById('theme-icon');
   const savedTheme = localStorage.getItem('theme');

   if (savedTheme === 'dark') {
       body.classList.add('dark-theme'); // Dark theme uygula
       themeIcon.classList.replace('bx-sun', 'bx-moon'); // İkonu ayarla
   } else {
       body.classList.remove('dark-theme'); // Light theme uygula
       themeIcon.classList.replace('bx-moon', 'bx-sun'); // İkonu ayarla
   }
}

// Sayfa yüklendiğinde fonksiyonu çağır
document.addEventListener('DOMContentLoaded', applySavedTheme);


window.addEventListener("scroll", scrollActive)





