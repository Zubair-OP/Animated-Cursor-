let small = document.querySelector('.small-cursor')
let shadow = document.querySelector('.shadow-cursor')

let mousex = 0;
let mousey = 0;

document.addEventListener('mousemove',(e)=>{
    mousex = e.clientX 
    mousey = e.clientY 
    small.style.left = mousex + 'px' 
    small.style.top = mousey + 'px' 
    // shadow.style.left = e.clientX + 'px' 
    // shadow.style.top = e.clientY + 'px' 
    // ShadowCursor();
})

// shadow.style.left = '0px'
// shadow.style.top = '0px'

function ShadowCursor() {
    let currentX = parseFloat(shadow.style.left) || 0
    let currentY = parseFloat(shadow.style.top) || 0

    let distanceX = mousex - currentX
    let distanceY = mousey - currentY


    shadow.style.left = currentX + distanceX * 0.2 + 'px'
    shadow.style.top = currentY + distanceY * 0.2 + 'px'

    requestAnimationFrame(ShadowCursor)

}

ShadowCursor();