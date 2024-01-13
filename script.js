function cursorChange () {
    const cursor = document.querySelector('.cursor')
    document.addEventListener('mousemove', (event)=> {
        let xPos =  event.clientX
        let yPos = event.clientY

        cursor.style.transform = `translate3d(calc(${xPos}px - 50%),calc(${yPos}px - 50%),0)`
    })
}

cursorChange()