const plusBtn = document.getElementById("add");
const minusBtn = document.getElementById("minus");
const qtyDOM = document.querySelector(".qty");
const cartDOM = document.querySelector(".cart-product");
const cartBtn = document.querySelector(".cart-btn");
const checkoutBtn = document.querySelector(".checkout-btn");
const cartItemsSpan = document.querySelector(".indicator");
const emptyCart = document.querySelector(".empty-cart");
const wrp = document.querySelector(".cart__content");
const indicator = document.querySelector(".indicator");
const quantity = document.querySelector(".quantity");

let amountValue = 0;
let currentImg = 1;

indicator.getElementsByClassName.display = "none";



// Lightbox

function openModal() {
  document.getElementById("myModal").style.display = "block";
}

function closeModal() {
  document.getElementById("myModal").style.display = "none";
}

let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides((slideIndex += n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("demo");
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace("active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += "active";
}

handlePlus = () => {
  amountValue++;
  quantity.innerText = amountValue;
};

handleMinus = () => {
  if (amountValue > 0) {
    amountValue--;
  }
  quantity.innerText = amountValue;
};

plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);



addItem = () => {
  if (amountValue > 0) {
    const total = 125.0 * amountValue;
    wrp.classList.remove("empty");
    wrp.innerHTML = `
        <div class="product">
      <div>
        <img src="./images/image-product-1-thumbnail.jpg" class="product__img">
        <div class="pdt__description">
          <p class="pdt__title">Fall Limited Edition Sneakers</p>
          <p><span>$125.00</span> x <span class="number">${amountValue}</span> <b class="total">$${total}</b></p>
        </div>
        <button class="delete__btn" onclick="deleteItem()"><img src="./images/icon-delete.svg" alt=""></button>
      </div>
      <button class="checkout__btn">Checkout</button>
    </div>
        `;
    indicator.style.display = "block";
    indicator.innerText = amountValue;
  }
}

deleteItem = () => {
    wrp.classList.add("empty");
    wrp.innerHTML = `<p>Your cart is empty</p>`;
    indicator.style.display = "none";
}

