// select and add color
const allHeading = document.getElementsByClassName('heading');
for(const heading of allHeading){
    heading.style.color = '#0665BAFF';
}
const backpacks = document.getElementsByClassName('shopping');
for(const shopping of backpacks){
    shopping.style.backgroundColor = '#EBF4FA';
    shopping.style.padding = '20px'
    shopping.style.borderRadius = '50px'
}
const cards = document.getElementsByClassName('card');
for(const card of cards){
    card.style.backgroundColor = '#F0F8FF';
    card.style.padding = '20px';
    card.style.borderRadius = '50px';
}
// subscribe section
document.getElementById('subscribe').addEventListener('dblclick', function () {
   subscribe.style.backgroundColor='lightgreen'; 
})

document.getElementById('mail-info').addEventListener('keyup', function (event) {
    const text = event.target.value;
    const button = document.getElementById('mail-btn');
    if(text === '.com'){
        button.removeAttribute('disabled')
    }
    else{
        button.setAttribute('disabled', true);
    }
})
document.getElementById('mail-btn').addEventListener('click', function () {
    const info = document.getElementById('mail-info');
    info.style.diplay = none;
})

// Shoes
function shoeChange1() {
    document.getElementById('shoe1').src ='images/shoes/shoe-4.png'
}
function shoeChange2() {
    document.getElementById('shoe1').src ='images/shoes/shoe-1.png'
}
function shoeChange3() {
    document.getElementById('shoe2').src ='images/shoes/shoe-5.png'
}
function shoeChange4() {
    document.getElementById('shoe2').src ='images/shoes/shoe-2.png'
}
function shoeChange5() {
    document.getElementById('shoe3').src ='images/shoes/shoe-6.png'
}
function shoeChange6() {
    document.getElementById('shoe3').src ='images/shoes/shoe-3.png'
}

// Backpacks
function Change1() {
    document.getElementById('backpack1').src ='images/bags/bag-4.png'
}
function Change2() {
    document.getElementById('backpack1').src ='images/bags/bag-1.png'
}
function Change3() {
    document.getElementById('backpack2').src ='images/bags/bag-5.png'
}
function Change4() {
    document.getElementById('backpack2').src ='images/bags/bag-2.png'
}
function Change5() {
    document.getElementById('backpack3').src ='images/bags/bag-6.png'
}
function Change6() {
    document.getElementById('backpack3').src ='images/bags/bag-3.png'
}

// add cart
const shoeItem = document.getElementsByClassName('shoe_cart_btn');
for(const shoe_cart_btn of shoeItem ){
    shoe_cart_btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}
const bagItem = document.getElementsByClassName('bag_cart_btn');
for(const bag_cart_btn of bagItem ){
    bag_cart_btn.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
    })
}