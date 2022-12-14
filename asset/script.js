//!  fetch navbar
const ul = document.querySelector(".nav-list");
const ulHamburger = document.querySelector(".nav-list-hamburger");
const topHeader = document.querySelector(".top-header")

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
    listHamburger.style.transform = `translateX(-1500px)`;
})




//! searc

btnSearch = document.querySelector(".btnSearch");
search = document.querySelector(".search");

btnSearch.addEventListener("click", (e) => {
    e.stopPropagation()
    search.style.display = "block"
})

window.onclick = () => {

    search.style.display = "none"
}

search.addEventListener("click", (e) => {
    e.stopPropagation();

    search.style.display = "block"
})








window.onscroll = function () {
    if (document.documentElement.scrollTop > 80) {
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
