const navMenu = document.querySelector(".menu");
const menuBtn = document.getElementById("nav-toggle");
const menuCloseBtn = document.getElementById("nav-close");
const overlay = document.querySelector(".overlay");
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
const addBtn = document.getElementById("cart-button");

let amountValue = 0;
let currentImg = 1;

let slideIndex = 1;
let slideIndex_lb = 1;

openMenu = () => {
  navMenu.classList.add("active");
  overlay.classList.add("active");
};

closeMenu = () => {
  navMenu.classList.remove("active");
  overlay.classList.remove("active");
};

showSlides(slideIndex);
showSlidesTwo(slideIndex_lb);

function plusSlides(n) {
  showSlides((slideIndex += n));
}
function plusSlides_lb(n) {
  showSlidesTwo((slideIndex_lb += n));
}

function currentSlide_lb(n) {
  showSlidesTwo((slideIndex_lb = n));
}

function currentSlide(n) {
  showSlides((slideIndex = n));
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
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
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  dots[slideIndex - 1].className += " active";
}

function showSlidesTwo(n) {
  let i;
  let slide_lb = document.getElementsByClassName("my-slides");
  let dot = document.getElementsByClassName("dot-light-box");
  if (n > slide_lb.length) {
    slideIndex_lb = 1;
  }
  if (n < 1) {
    slideIndex_lb = slide_lb.length;
  }
  for (i = 0; i < slide_lb.length; i++) {
    slide_lb[i].style.display = "none";
  }
  for (i = 0; i < dot.length; i++) {
    dot[i].className = dot[i].className.replace(" activeTwo-lb", "");
  }
  slide_lb[slideIndex_lb - 1].style.display = "block";
  dot[slideIndex_lb - 1].className += " activeTwo-lb";
}

// opening and closing light box
let closeBtn = document.getElementById("close-btn");
let lightBox = document.querySelector(".modal");

openBtn = () => {
  lightBox.style.display = "block";
};

closeBtn.addEventListener("click", () => {
  lightBox.style.display = "none";
});

// cart drop down
const button = document.querySelector(".btn");
const menu = document.querySelector(".cart-item");

whenClicked = () => {
  menu.classList.toggle("activeTwo");
};

button.addEventListener("click", whenClicked);




indicator.getElementsByClassName.display = "none";

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


menuBtn.addEventListener("click", openMenu);
menuCloseBtn.addEventListener("click", closeMenu);
plusBtn.addEventListener("click", handlePlus);
minusBtn.addEventListener("click", handleMinus);
addBtn.addEventListener("click", addItem);
