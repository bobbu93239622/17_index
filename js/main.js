let carts = document.querySelectorAll('.add_cart');

let products = [
  {
    name: '原味貝果',
    tag: 'origin',
    price: 80,
    inCart: 0
  },
  {
    name: '抹茶貝果',
    tag: 'macha',
    price: 100,
    inCart: 0
  },
  {
    name: '芝麻貝果',
    tag: 'koma',
    price: 100,
    inCart: 0
  },
  {
    name: '巧克力貝果',
    tag: 'chocolate',
    price: 100,
    inCart: 0
  },
  {
    name: '奶油貝果',
    tag: 'butter',
    price: 110,
    inCart: 0
  },
  {
    name: '蔓越莓貝果',
    tag: 'berry',
    price: 110,
    inCart: 0
  }
 
];

for(let i = 0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers(products[i]);
    totalCos(products[i]);
  })
}

function onLoadCartNumbers() { //設此函式是當我重新載入頁面時，我的購物車的數字會變成0，但localstorage還是有東西
  let productNumbers = localStorage.getItem('cartNumbers')

  if(productNumbers) {
    document.querySelector('.cart span').textContent = productNumbers;
  }
}

function cartNumbers(product) {
  console.log('the product click is', product);
  let productNumbers = localStorage.getItem('cartNumbers')

  productNumbers = parseInt(productNumbers)//從localstorage取出來的東西是字串，需要轉成數字
  // console.log(productNumbers);
  if(productNumbers ) {
    localStorage.setItem('cartNumbers', productNumbers + 1)
    document.querySelector('.cart span').textContent = productNumbers + 1;


  }else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.cart span').textContent = 1;

  }

  setItem(product);


}

function setItem(product) {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems)
  console.log('My cartitems are', cartItems);
  // console.log('inside of setitem');
  // console.log('my product', product);

  if(cartItems != null) {
    // console.log(cartItems[product.tag]);
    if(cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      }
    }
    cartItems[product.tag].inCart += 1; 
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    }

  }
  
  localStorage.setItem('productsInCart', JSON.stringify(cartItems))

}


function totalCos(product) {
  // console.log('the product is', product.price);
  // localStorage.setItem('totalCost', product.price)
  let cartCost = localStorage.getItem('totalCost');
  console.log('My cartCost is', cartCost);
  console.log(typeof cartCost);

  if(cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price)
  } else {
    localStorage.setItem('totalCost', product.price);
  }

}  
function displayCart(){
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);
  
  // console.log(cartItems);
  let productContainer =  document.querySelector('.products');
  let cartCost = localStorage.getItem('totalCost');

  console.log(cartItems);
  if(cartItems && productContainer) {
    // console.log('running');
    productContainer.innerHTML = '';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="product">
        <i class="fa-regular fa-circle-xmark"></i>
        <img src="./img/${item.tag}.jpg">
        <span>${item.name}</span>
        
      </div>
      <div class="price">${item.price}</div>
      <div class="quantity">
        <i class="fa-solid fa-caret-up"></i>
        <span>${item.inCart}</span>
        <i class="fa-solid fa-caret-down"></i>
      </div>
      <div class="total">
        $${item.inCart * item.price},00
      </div>
      `
    })
    productContainer.innerHTML += `
      <div class="basketTotalContainer">
        <h4 class="basketTotalTitle">
          Basket Total
        </h4>
        <h4 class="BasketTotal">
          $${cartCost},00
        </h4>
    `;
  }
}



onLoadCartNumbers()
displayCart()