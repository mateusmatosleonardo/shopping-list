let items = [] // Definindo itens como vazio

let buttonSubmit = document.querySelector('input[type=submit]')

buttonSubmit.onclick = () =>{
    let nameProduct = document.querySelector('input[name=product-name]').value
    let priceProduct = document.querySelector('input[name=product-value]').value

    items.push({
        name: nameProduct,
        value: priceProduct
    })

    let listItems = document.querySelector('.list-items')
    listItems.innerHTML = ""
    items.map((val)=>{
        listItems.innerHTML+=`
        <div class="list-items-single">
            <h3>`+val.name+`</h3>
            <h3 class="price"><span>$ `+val.value+`</span></h3>
        </div><!--list-items-single-->
        `
    })

    // CLEAR //
    
}
