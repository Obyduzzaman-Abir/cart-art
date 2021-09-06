const div1 = document.getElementById('first');
const div2 = document.getElementById('second');
const div3 = document.getElementById('third');

const img = document.getElementById('art');
const desc = document.getElementById('desc');
const price = document.getElementById('price');

const free = document.getElementById('free');
const express = document.getElementById('express')
const shippingFeild = document.getElementById('shipping');

const total = document.getElementById('total');


free.addEventListener('click', function () {
    shippingFeild.innerText = "5";
    updateTotal();
});
express.addEventListener('click', function () {
    shippingFeild.innerText = '30';
    updateTotal();
})

//update total
function updateTotal() {
    const shippingCharge = Number(shippingFeild.innerText);
    const productPrice = Number(price.innerText);
    const grandTotal = shippingCharge + productPrice;
    total.innerText = grandTotal;

}



div1.addEventListener('click', function () {
    img.src = 'images/1.jpg';
    desc.innerText = 'Art is a diverse range of human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.'
    price.innerText = '650'
    //update  total
    updateTotal();

});

div2.addEventListener('click', function () {
    img.src = 'images/2.jpg';
    desc.innerText = 'second-Art is a diverse range of human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.'
    price.innerText = '550'
    updateTotal();
});
div3.addEventListener('click', function () {
    img.src = 'images/3.jpg';
    desc.innerText = 'Third-Art is a diverse range of human activities involving creative imagination to express technical proficiency, beauty, emotional power, or conceptual ideas.'
    price.innerText = '330'
    updateTotal();
});