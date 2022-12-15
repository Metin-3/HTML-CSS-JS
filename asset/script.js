
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


//! count
const countSpan = document.querySelector(".count");
const increase = document.querySelector(".increase");
const decrease = document.querySelector(".decrease");

let count = 0
increase.addEventListener("click", () => {
    count++
    countSpan.innerText = count;
})

decrease.addEventListener("click", () => {
    if (count > 0) {
        count--;
        countSpan.innerText = count
    }
})



//! loading
window.addEventListener("load", () => {
    setTimeout(() => {
        document.querySelector(".loading-wrapper").style.display = "none";
        document.body.style.overflow = "scroll"
    }, 2000)
})


search