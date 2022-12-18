
//!  fetch navbar
const ul = document.querySelector(".nav-list");
const ulHamburger = document.querySelector(".nav-list-hamburger");
const topHeader = document.querySelector(".top-header");
const navListHamburger = document.querySelector(".nav-list-hamburger");
innerNavRight = document.querySelector(".inner-nav-right");

fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => json.map(j => {

        const li = document.createElement("li");
        const a = document.createElement("a");

        ulHamburger.appendChild(li)
        ul.appendChild(li);
        li.appendChild(a);

        a.setAttribute("href", "#");

        a.innerText = `${j}`
    })

    )


fetch('https://fakestoreapi.com/products/categories')
    .then(res => res.json())
    .then(json => json.map(j => {

        const li = document.createElement("li");
        const a = document.createElement("a");

        ulHamburger.appendChild(li)
        li.appendChild(a);

        a.setAttribute("href", "#");

        a.innerText = `${j}`

    })
    )



//! basket and count-----------Winter Walking Shoes
const countBasket = document.querySelector(".countBasket");
const addCardBtn = document.querySelector(".addCard");

const countSpan = document.querySelector(".count");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");

const onlyImg = document.querySelector(".onlyImg");
const winterContainer = document.querySelector("#winterContainer");
const img = document.querySelector("#Img");
const body = document.querySelector("body")

let count = 0;
let basket = 0;
increase.addEventListener("click", (e) => {
    count++
    countSpan.innerText = count;
})

decrease.addEventListener("click", (e) => {
    if (count > 0) {
        count--;
        countSpan.innerText = count
    }
})

addCardBtn.addEventListener('click', (e) => {

    basket++;

    countBasket.innerText = `${basket}`;
});

img.addEventListener("click", (e) => {
    e.stopPropagation()
    winterContainer.style.display = "none";
    onlyImg.style.display = "block";
    body.style.overflowY = "hidden"
})

window.addEventListener("click", (e) => {
    winterContainer.style.display = "block";
    onlyImg.style.display = "none"
    body.style.overflowY = "auto"

})



//! hamburger menu 

let listHamburger = document.querySelector(".nav-list-hamburger");
let mobilBtn = document.querySelector(".btn-bars-hamburger");
let closeBtn = document.querySelector(".close-btn");

mobilBtn.addEventListener("click", function () {
    listHamburger.style.transform = `translateX(0)`;
})

closeBtn.addEventListener("click", function () {
    listHamburger.style.transform = `translateX(-2000px)`;
})




//! searc

btnSearch = document.querySelector(".btnSearch");
search = document.querySelector(".search");

btnSearch.addEventListener("click", (e) => {
    e.stopPropagation()
    search.style.visibility = "visible";
    search.style.transform = "scale(1.0)"
})

window.onclick = () => {

    search.style.visibility = "hidden"
    search.style.transform = "scale(0.0)"
}

search.addEventListener("click", (e) => {
    e.stopPropagation();

    search.style.visibility = "visible"
})







//! go to top and scroll navbar
window.onscroll = function () {
    if (document.documentElement.scrollTop > 200) {
        document.getElementById("nav").className = "nav-active";
        topHeader.style.display = "none"
        document.getElementById("go-to-top").style.display = "block";
    } else {
        document.getElementById("nav").className = "";
        topHeader.style.display = "block"
        document.getElementById("go-to-top").style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}




//! loading
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loading-wrapper").style.display = "none";
        document.body.style.overflow = "scroll"
    }, 2000)
})







// ! Raleted Products
const gap = 16;

const carousel = document.getElementById("carousel"),
    content = document.getElementById("content"),
    next = document.getElementById("next"),
    prev = document.getElementById("prev");

next.addEventListener("click", (e) => {
    carousel.scrollBy(width + gap, 0);
});
prev.addEventListener("click", (e) => {
    carousel.scrollBy(-(width + gap), 0);
});

let width = 270;




//! Description and Reviews
const descriptionBtn = document.querySelector(".description-btn");
const reviewsBtn = document.querySelector(".reviews-btn");
const description = document.querySelector("#description");
const reviews = document.querySelector("#reviews");
const nameInput = document.querySelector("#name");
const emailInput = document.querySelector("#email");
const star = document.querySelectorAll(".fa-star");
const textarea = document.querySelector("textarea");


descriptionBtn.addEventListener("click", (e) => {
    if (description.style.display = "none") {
        description.style.display = "block";
        reviews.style.display = "none"
        descriptionBtn.style.backgroundColor = "#ff4747";
        descriptionBtn.style.color = "#fff";
        reviewsBtn.style.backgroundColor = "#fff";
        reviewsBtn.style.color = "#ff4747";
    }
});


reviewsBtn.addEventListener("click", (e) => {
    if (reviews.style.display = "none") {
        description.style.display = "none";
        reviews.style.display = "block"
        descriptionBtn.style.backgroundColor = "#fff";
        descriptionBtn.style.color = "#ff4747";
        reviewsBtn.style.backgroundColor = "#ff4747";
        reviewsBtn.style.color = "#fff";
    }
})

nameInput.addEventListener("keyup", (e) => {
    if (nameInput.value.trim() == "") {
        nameInput.style.borderColor = "red";
    } else {
        nameInput.style.borderColor = "blue";
    }
})

emailInput.addEventListener("keyup", (e) => {
    if (emailInput.value.trim() == "") {
        emailInput.style.borderColor = "red";
    } else {
        emailInput.style.borderColor = "blue";
    }
})

textarea.addEventListener("keyup", (e) => {
    if (textarea.value.trim() == "") {
        textarea.style.borderColor = "red";
    } else {
        textarea.style.borderColor = "blue";
    }
})





