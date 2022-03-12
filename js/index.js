var products = document.querySelector('.products');
var searchInput = document.querySelector('.search input');

async function filterProducts() {
  try {
    const url = `http://fakestoreapi.com/products`;
    const response = await fetch(url);
    const data = await response.json();

    products.innerHTML = '';

    data.forEach((item) => {
      var newProduct = document.createElement('div');
      newProduct.classList.add('product');
      newProduct.innerHTML = `
            <img src="${item.image}" alt="" />
              <div class="info">
                <div class="name"> ${item.title} </div>
                <div class="price"> $${item.price}</div>
              </div>`;

      products.appendChild(newProduct);
    });
  } catch (error) {
    console.log(error);
  }
}
filterProducts();

searchInput.addEventListener('input', function (e) {
  let txtSearch = e.target.value.trim().toLowerCase();
  let listProductDom = document.querySelectorAll('.product');

  listProductDom.forEach((item) => {
    if (item.innerText.toLowerCase().includes(txtSearch)) {
      item.classList.remove('.hide');
    } else {
      item.classList.add('hide');
    }
  });
});
