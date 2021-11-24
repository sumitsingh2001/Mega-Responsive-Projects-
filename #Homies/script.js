const dropdownItems = document.querySelectorAll('.dropdown-hover');

dropdownItems.forEach(dropdown => {
    dropdown.addEventListener('mouseover', () => {
        dropdown.lastElementChild.style.cssText = 'opacity:1; visibility:visible'
            // document.querySelector('.navbar-wrapper').style.background = 'linear-gradient(to right, rgba(211, 170, 170, 0.8)30%, #2f8fdf, #066399, rgba(255, 255, 255, 0.8))'
        dropdown.firstElementChild.firstElementChild.style.transform = 'rotate(180deg)'
    })
    dropdown.addEventListener('mouseout', () => {
        dropdown.lastElementChild.style.cssText = 'opacity:0; visibility:hidden'
            // document.querySelector('.navbar-wrapper').style.background = 'none'
        dropdown.firstElementChild.firstElementChild.style.transform = 'rotate(0deg)'
    })
})