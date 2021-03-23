$(document).ready(function (){
    $('#logo-img').add($('#logo-text')).click(function() {
        window.location.href = 'index.html'
    })

    let currentCtg = document.getElementById('ctg-burgers')
    let menuMap = new Map()
    menuMap.set(document.getElementById('ctg-burgers'), document.getElementById('burgers'))
    menuMap.set(document.getElementById('ctg-salads'), document.getElementById('salads'))
    menuMap.set(document.getElementById('ctg-desserts'), document.getElementById('desserts'))

    menuMap.get(currentCtg).style.display = 'flex'

    $('#ctg-burgers').add($('#ctg-salads')).add($('#ctg-desserts')).click(function(event) { ctgSelect(event) })

    $(document).ready(function () {
        const nav = document.querySelector('#nav')
        nav.style.top = (document.querySelector('.header').getBoundingClientRect().bottom + 10) + 'px'
        $('#nav-button').click(function() {
            nav.style.visibility = nav.style.visibility !== 'visible' ? 'visible' : 'hidden'
        })
    })

    function ctgSelect(event) {
        currentCtg.style.textDecoration = 'none'
        event.target.style.textDecoration = 'underline'

        menuMap.get(currentCtg).style.display = 'none'
        menuMap.get(event.target).style.display = 'flex'
        currentCtg = event.target
    }
})