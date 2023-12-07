// show menu
const showMenu = (toggleId, navId) => {
  const toggle = document.getElementById(toggleId),
  nav = document.getElementById(navId)

  // validate that variables exist
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      // we add the show menu class to the div tag with the nav__menu class
      nav.classList.toggle('show-menu')
    })
  }
}

showMenu('nav-toggle', 'nav-menu');


// remove menu mobile
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
  const navMenu = document.getElementById('nav-menu')
  // when we click on each nav__link, we remove the show menu class
  navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))


// scroll sections active link
const sections = document.querySelectorAll('section[id]')

function scrollActive() {
  const scrollY = window.pageYOffset

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId - current.getAttribute('id');

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
    }
  })
}

window.addEventListener('scroll', scrollActive);

// show scroll top


// dark light theme


// reduce the size and print on A4 sheet


// remove the size when the CV is downloaded


// generate PDF


// PDF generated area


// HTML2PDF options


// function to call areaCV and HTML2PDF options


// when the button is clicked, it executes three functions:

// 1. the class .scale-cv is added to the body, where it reduces the size of the elements

// 2. the PDF is generated

// 3. the .scale-cv is removed from the body after 5 seconds to return to normal size

