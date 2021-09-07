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
    let sum = 0
    listItems.innerHTML = ""
    items.map((val)=>{
        sum+=parseFloat(val.value) 
        listItems.innerHTML+=`
        <div class="list-items-single">
            <h3>`+val.name+`</h3>
            <h3 class="price"><span>$ `+val.value+`</span></h3>
        </div><!--list-items-single-->
        `
    })
    sum = sum.toFixed(2) // Pegando apenas 2 casas decimais

    let sumProduct = document.querySelector('.total h2')
    sumProduct.innerHTML = 'R$' + sum

    // CLEAR //
    
}
