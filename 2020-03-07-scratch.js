// Lesson: JavaScript can be BLOCKING
// console.log('Justin has arrived')
//
// window.alert('heyyyyyyyyyy')
//
// console.log('we are done with the loop')

console.log('hello from the external JS file')

// grab the DOM elements
let showSillyBtn = document.getElementById('showSillyBtn')
let hideSillyBtn = document.getElementById('hideSillyBtn')

showSillyBtn.onclick = showTheSillyElements
hideSillyBtn.onclick = hideTheSillyElements

// another way to attach an event handler:
// showSillyBtn.addEventListener('click', showTheSillyElements)
// hideSillyBtn.addEventListener('click', hideTheSillyElements)

function hideTheSillyElements () {
  console.log('calling hideTheSillyElements now!')

  let allTheSillyElements = document.querySelectorAll('.silly')
  allTheSillyElements.forEach(function (el) {
    el.style.display = 'none'
  })
}

function showTheSillyElements () {
  console.log('calling showTheSillyElements now!')

  let allTheSillyElements = document.querySelectorAll('.silly')
  allTheSillyElements.forEach(function (el) {
    el.style.display = ''
  })
}
