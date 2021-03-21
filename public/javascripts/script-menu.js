$(document).ready(function (){
    $('#logo-img').add($('#logo-text')).click(function() {
        window.location.href = '../homepage/index.html'
    })

    let currentCtg = document.getElementById('ctg-burgers')
    let menuMap = new Map()
    menuMap.set(document.getElementById('ctg-burgers'), document.getElementById('burgers'))
    menuMap.set(document.getElementById('ctg-salads'), document.getElementById('salads'))
    menuMap.set(document.getElementById('ctg-desserts'), document.getElementById('desserts'))

    menuMap.get(currentCtg).style.display = 'flex'

    $('#ctg-burgers').add($('#ctg-salads')).add($('#ctg-desserts')).click(function(event) { ctgSelect(event) })

    function ctgSelect(event) {
        currentCtg.style.textDecoration = 'none'
        event.target.style.textDecoration = 'underline'

        menuMap.get(currentCtg).style.display = 'none'
        menuMap.get(event.target).style.display = 'flex'
        currentCtg = event.target
    }

    const template = document.getElementById('test')
    const arr = ['Habanero', 'Salsa Amalia', 'Shopska Salata', 'Caesar Salad', 'Krastai4ki i domati', 'Salata Eshensii']
    for(let i=0; i<arr.length; i++){
        let clone = template.content.cloneNode(true)
        clone.querySelector('.menu-item-text h3').textContent = arr[i]

        document.getElementById('salads').appendChild(clone)
    }
})