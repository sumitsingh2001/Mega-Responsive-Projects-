 const navbar = document.querySelector(".navbar");
 //  const navbarOffsetTop = navbar.OffsetTop;
 const navbarOffsetTop = navbar.offsetTop;
 const sections = document.querySelectorAll("section");
 const navbarLinks = document.querySelectorAll(".navbar-link");

 window.addEventListener('scroll', () => {

     //  console.log(window.pageYOffset, navbar.offsetTop);

     if (window.pageYOffset >= navbarOffsetTop) {
         //  console.log("sticky");
         navbar.classList.add('sticky');
     } else {
         navbar.classList.remove('sticky');
     }
     sections.forEach((section, i) => {
         if (window.pageYOffset >= section.offsetTop - 10) {
             navbarLinks.forEach((navbarLink) => {
                 navbarLink.classList.remove("change");
             });
             navbarLinks[i].classList.add("change");
         }
     });
 });