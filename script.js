function cursorChange () {
    const cursor = document.querySelector('.cursor')
    const links = document.querySelectorAll('a')
    const articles = document.querySelectorAll('.articles')

    document.addEventListener('mousemove', (event)=> {
        let xPos =  event.clientX
        let yPos = event.clientY

        cursor.style.transform = `translate3d(calc(${xPos}px - 50%),calc(${yPos}px - 50%),0)`
    })

    links.forEach((link) => {
        link.addEventListener('mouseover',()=>{
            cursor.classList.add('hovered')
        })
        link.addEventListener('mouseleave', () => {
            cursor.classList.remove('hovered')
        })
    })

    articles.forEach((article) => {
        article.addEventListener('mouseover',()=>{
            cursor.classList.add('hovered')
        })
        article.addEventListener('mouseleave',()=>{
            cursor.classList.remove('hovered')
        })
    })
}

cursorChange()