let Links = []
const navbtn = document.querySelector('.navbtn')
const xbtn = document.querySelector('.xbtn')
const nav_links = document.querySelector('.nav-links')
const links = document.querySelector('.links')
const date = document.querySelector('.date')
const navbar = document.querySelector('.navbar')
const _section = document.querySelectorAll('.section')
let goal

// #############dynamic navbar
// append links
_section.forEach((item) => {
  Links.push(item.firstElementChild.innerHTML)
})

let ul = document.createElement('ul')

Links.forEach((link) => {
  let li = document.createElement('li')
  li.innerHTML += link
  ul.appendChild(li)
})
links.appendChild(ul)
// ############### rbd of dynamic navbar
// end of append links

// toogle_navbar
xbtn.addEventListener('click', () => {
  nav_links.classList.toggle('show-links')
})
navbtn.addEventListener('click', () => {
  nav_links.classList.toggle('show-links')
})
// end of toggle_navbar

// date
date.innerHTML = new Date().getFullYear()
// end of date

// scroll     ######links
window.addEventListener('DOMContentLoaded', () => {
  const _li_link = document.querySelectorAll('li')
  // function to highlight on scroll
  function highlight_on_scroll(e) {
    let navbar_height = navbar.getBoundingClientRect().height
    let scroll_height = pageYOffset
    _li_link.forEach((item) => {
      let g = document.querySelector(`.${item.textContent}`)
      if (scroll_height >= g.offsetTop - navbar_height) {
        item.classList.add('highlight')
        if (
          scroll_height >=
          g.getBoundingClientRect().height + g.offsetTop - navbar_height
        ) {
          item.classList.remove('highlight')
        }
      } else {
        item.classList.remove('highlight')
      }
    })
  }
  // end of  function to highlight on scroll

  // highlight link on scroll
  window.addEventListener('scroll', (e) => highlight_on_scroll(e))
  // end of highlight link of scroll

  // scroll && smooth
  _li_link.forEach((item) => {
    item.addEventListener('click', (e) => {
      goal = document.querySelector(`.${item.innerHTML}`)
      // highlight link on click
      // _li_link.forEach((i) => {
      //   if (e.target == i) {
      //     i.classList.add('highlight')
      //   } else {
      //     i.classList.remove('highlight')
      //   }
      // })
      // end of highlight link on click
      let navbar_height = navbar.getBoundingClientRect().height
      // scroll on click
      window.scrollTo({
        left: 0,
        top: goal.offsetTop - navbar_height,
        behavior: 'smooth',
      })
      // end of scroll on click

      // hide links
      nav_links.classList.toggle('show-links')
    })
  })
  // end of scroll & smooth
})
// end of scroll  #########links

// fixed navbar
window.addEventListener('scroll', (e) => {
  let navbar_height = navbar.getBoundingClientRect().height
  let scroll_height = pageYOffset
  if (scroll_height > navbar_height) {
    navbar.classList.add('fixed-navbar')
  } else {
    navbar.classList.remove('fixed-navbar')
  }
})
// end of fixed navbar
