const btns = document.querySelectorAll('.btn')


const goCrazy = (e) => {
    console.log(e)
    const butt = e.target

    const offsetLeft = Math.random() * (window.innerWidth - butt.clientWidth)
    const offsetTop = Math.random() * (window.innerHeight - butt.clientHeight)
     

    butt.style.top = offsetTop + 'px' 
    butt.style.left = offsetLeft + 'px'
}


btns.forEach(btn => btn.addEventListener('mouseenter', goCrazy))