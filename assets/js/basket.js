const list = document.getElementById("list");

function getProducts() {
    list.innerHTML = ''
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  console.log(cart);
  cart.map((item, index) => {
    const myDiv = document.createElement("div");
    myDiv.className = "box col-xl-4 col-md-4 col-12";
    myDiv.innerHTML = `
      <img src="${item.image}" alt="">
      <h6>${item.name}</h6>
      <p>${item.title}</p>
      <p>${item.price}</p>
      <button onclick = "removeBasket(${index})">Remove to basket</button>
      
      `;
    list.appendChild(myDiv);
  });
}

function removeBasket(index) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  getProducts();
}
getProducts();
