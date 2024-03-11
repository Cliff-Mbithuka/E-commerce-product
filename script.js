const cartIcon = document.querySelector(".cart");
const cartBox = document.querySelector(".cart-box");
const normalPrice = document.querySelector(".normal-price");
const addCart = document.querySelector(".colored-btn");
const quantityLabel = document.querySelector(".quality-label");
const productContainer = document.querySelector(".product-content");
const cartEmpty = document.querySelector(".cart-empty");

// increament and decreament
const qty = document.querySelector(".qty-number");
const decr =  document.querySelector(".decreament");
const incr = document.querySelector(".increament");

//images
const imageLarge  = document.querySelector(".large-image");
const thumbImage = document.querySelectorAll(".thumbnail img");

//modal
const modalEl = document.querySelector(".modal");
const closeModal = document.querySelector(".close-icon");

//modal images
const imageLargeModal  = document.querySelector(".large-image-modal");
const thumbImageModal = document.querySelectorAll(".thumbnail-modal img");


let productPrice = 125;
let totalQty = parseInt(qty.innerHTML);
let totalPrice;

decr.addEventListener("click", () => {
if(totalQty == 1){
    totalQty = 1;
}else{
    totalQty--;
}
totalPrice = productPrice * totalQty;
normalPrice.textContent = "$" + totalPrice + ".00";
qty.textContent = totalQty;
});

incr.addEventListener("click", () => {
    totalQty++;
    totalPrice = productPrice * totalQty;
    normalPrice.textContent = "$" + totalPrice + ".00";
    qty.textContent = totalQty;
});

// show and hide the card
cartIcon.addEventListener("click", () => {
    cartBox.classList.add("display");
});

addCart.addEventListener("click", () => {
    quantityLabel.style.display = "block";
    quantityLabel.textContent = totalQty;
productContainer.innerHTML = "";


let html = `<img src="images/image-product-1-thumbnail.jpg" alt="" />
<div class="product-details">
  <p class="product-text">Fall Limited Edition Sneakers</p>
  <p class="price">
    $125.00 <span>x</span><span class="times">${totalQty}</span>
    $<span class="total">${productPrice * totalQty}</span>
  </p>
</div>
<div class="trash">
  <img src="images/icon-delete.svg" alt="" class="trash-img"/>
</div>`;

productContainer.insertAdjacentHTML("afterbegin", html);
cartEmpty.textContent = "";

document.querySelector(".trash-img").addEventListener("click", () => {
    cartEmpty.innerHTML = "Your Cart is Empty : ";
    productContainer.innerHTML = "";
    quantityLabel.style.display = "none";
});
});


thumbImage.forEach((img, indx) => {
    img.addEventListener("click", () => {
        imageLarge.src = `images/image-product-${indx + 1}.jpg`;
        thumbImage.forEach((thumb) => thumb.classList.remove("active"));
        img.classList.add("active");
    });
});

imageLarge.addEventListener("click", () => {
    modalEl.style.display = "block";
});                 

closeModal.addEventListener("click", () => {
    modalEl.style.display = "none";
})

thumbImageModal.forEach((img, indx) => {
    img.addEventListener("click", ()=> {
        imageLargeModal.src = `images/image-product-${indx + 1}.jpg`;
    });
});