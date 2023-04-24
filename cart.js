let basketContainer = document.querySelector('.basket_container');
let subtotal = document.querySelector('.subtotal');
let items = document.querySelector('.items');


function showBasket(arr) {
    let summary = [];
    basketContainer.innerHTML = '';
    arr.forEach(data => {
        basketContainer.innerHTML += 
        `<div class="basket_card">
            <img src="${data.img}">
            <div class="card_title_min_max">
                <p>${data.title}</p>
                <div class="inc_dec_container">
                    <p>Miqdar</p>
                    <div class="inc_dec">
                        <button class="dec_btn" onclick="minusFunc(${data.id})">-</button>
                        <p class="quantity">${data.count}</p>
                        <button class="inc_btn" onclick="plusFunc(${data.id})">+</button>
                    </div>
                </div>
            </div>
            <p class="product_price">price: ${(data.count*data.price).toFixed(2)} &#8380;</p>
            <ion-icon name="trash-outline" class="trash" onclick="empty(${data.id})"></ion-icon>
        </div>`

        summary.push(data.count*data.price)
    });

    let sum = 0;
    for (let i=0; i<summary.length; i++) {
        sum += summary[i];
    }
    subtotal.innerHTML = sum.toFixed(2);
}

function empty(del) {
    let index = basket.findIndex(data=>data.id===del);
    basket.splice(index, 1);
    showBasket(basket);
}


function plusFunc(y){
    console.log(y);
    let checkBasket = basket.find(data=>data.id===y);
    checkBasket.count += 1;
    showBasket(basket)
    localStorage.setItem('basket', JSON.stringify(basket))
}


function minusFunc(y){
    console.log(y);
    let checkBasket = basket.find(data=>data.id===y);
    checkBasket.count -= 1;
    showBasket(basket)
    localStorage.setItem('basket', JSON.stringify(basket))
    if(checkBasket.count===0) {
        let index = basket.findIndex(data=>data.id===y)
        basket.splice(index, 1)
        showBasket(basket)
        localStorage.setItem('basket', JSON.stringify(basket))
    }
}

window.addEventListener('load', ()=>{
    showBasket(basket)
})