$(document).ready(function () {

    let ctg = ['burgers', 'salads', 'desserts']

    for(let i=0; i<ctg.length; i++){
        getProductsByCtg(i+1).then(
            (response) => {
                const products = response.data
                const template = document.querySelector('#item-template')
                for(let j=0; j<products.length; j++){
                    const clone = template.content.cloneNode(true)
                    clone.querySelector('.menu-item-text h3').textContent = products[j].name
                    clone.querySelector('.menu-item-footer .price').textContent = products[j].price
                    console.log(ctg[i])
                    document.querySelector(`#${ctg[i]}`).appendChild(clone)
                }
            }
        )
    }
})

async function getAllProducts() {
    try {
        return await $.get('http://localhost:3000/menu/all')
    }
    catch (error) {
        console.log(error)
    }
}

async function getProductsByCtg(id) {
    try {
        return await $.get('http://localhost:3000/menu/filter/'+id)
    }
    catch (error) {
        console.log(error)
    }
}
