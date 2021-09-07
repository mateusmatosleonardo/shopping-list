let items = [] // Definindo itens como vazio

let buttonSubmit = document.querySelector('input[type=submit]')

buttonSubmit.onclick = () =>{
    let nameProduct = document.querySelector('input[name=product-name]').value
    let priceProduct = document.querySelector('input[name=product-value]').value

    items.push({
        name: nameProduct,
        value: priceProduct
    })
}