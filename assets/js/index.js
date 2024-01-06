const products = document.getElementById("products");
const btn = document.getElementById("btn");

let page = 1;
let limit = 3;
let pro = [];

async function myFunc() {
  try {
    const response = await axios.get(
      `https://655c84d425b76d9884fd7251.mockapi.io/product?page=${page}&limit=${limit}`
    );
    const data = await response.data;
    pro = data;
    pro.map((item) => {
      const myDiv = document.createElement("div");
      myDiv.className = "box col-xl-4 col-md-4 col-12";
      myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.name}</h6>
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick = "addToBasket(${item.id})">Add to basket</button>
        
        `;
      products.appendChild(myDiv);
    });

    page++;
  } catch (error) {
    console.log(error);
  }
}

btn.addEventListener("click", myFunc);

function addToBasket(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(pro.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}

myFunc();

// search

const inp = document.getElementById("inp");
const srchBtn = document.getElementById("srchBtn");

function findByName() {
  products.innerHTML = "";

  axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/product")
    .then((res) => {
      pro = res.data;
      let filterData = pro.filter((item) =>
        item.title.toLowerCase().startsWith(inp.value.toLowerCase())
      );
      console.log(filterData);
      filterData.map((item) => {
        const myDiv = document.createElement("div");
        myDiv.className = "box col-xl-4 col-md-4 col-12";
        myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.name}</h6>
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick = "addToBasket(${item.id})">Add to basket</button>
        
        `;
        products.appendChild(myDiv);
      });
    });
}

srchBtn.addEventListener("click", findByName);

// sort

const max = document.getElementById("max");
const min = document.getElementById("min");

function maxFunc() {
  products.innerHTML = "";

  axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/product")
    .then((res) => {
      pro = res.data;
      let sortData = pro.sort((a, b) => b.price - a.price);
      sortData.map((item) => {
        const myDiv = document.createElement("div");
        myDiv.className = "box col-xl-4 col-md-4 col-12";
        myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.name}</h6>
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick = "addToBasket(${item.id})">Add to basket</button>
        
        `;
        products.appendChild(myDiv);
      });
    });
}

max.addEventListener('click', maxFunc)


function minFunc() {
  products.innerHTML = "";

  axios
    .get("https://655c84d425b76d9884fd7251.mockapi.io/product")
    .then((res) => {
      pro = res.data;
      let sortData = pro.sort((a, b) => a.price - b.price);
      sortData.map((item) => {
        const myDiv = document.createElement("div");
        myDiv.className = "box col-xl-4 col-md-4 col-12";
        myDiv.innerHTML = `
        <img src="${item.image}" alt="">
        <h6>${item.name}</h6>
        <p>${item.title}</p>
        <p>${item.price}</p>
        <button onclick = "addToBasket(${item.id})">Add to basket</button>
        
        `;
        products.appendChild(myDiv);
      });
    });
}

min.addEventListener('click', minFunc)