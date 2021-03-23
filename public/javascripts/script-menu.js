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

    let products = getAllProducts()

    function ctgSelect(event) {
        currentCtg.style.textDecoration = 'none'
        event.target.style.textDecoration = 'underline'

        menuMap.get(currentCtg).style.display = 'none'
        menuMap.get(event.target).style.display = 'flex'
        currentCtg = event.target
    }

    async function getAllProducts() {
        const result = await $.get('http://localhost:3000/menu/all', function(response, status) {
            console.log('1', response)
            products = response.data
        })

        return result;
    }

    /*const template = document.getElementById('item-template')
    for(let i=0; i<products.length; i++) {
        const clone = template.content.cloneNode(true)
        clone.querySelector('.menu-item-text h3').textContent = products[i].name
        clone.querySelector('.menu-item-footer .price').textContent = products[i].price
        document.getElementById('burgers').appendChild(clone)
    }*/

})