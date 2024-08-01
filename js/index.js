// CATEGORY
async function getCategories() {
  const res = await client.get("products");
  return res.data.products;
}

function renderCarousels(products) {
  const imgProduct = [];
  for (let i = 0; i < products.length; i++) {
    if (products[i].title != "Calvin Klein CK One") {
      if (products[i].title != "Dolce Shine Eau de") {
        imgProduct.push(products[i].images[0]);
      }
    }
  }

  const html = imgProduct
    .map((item) => {
      return `<div class="item car-item d-flex"><img src="${item}" alt="" class="car-thumb"></div>`;
    })
    .join("");
  $(".owl-carousel").html(html);

  $(".owl-carousel").owlCarousel({
    items: 6,
    loop: true,
    nav: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
    dots: true,
    dotsEach: 2,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 3,
        nav: false,
      },
      1000: {
        items: 5,
      },
    },
  });
}

$(function () {
  getCategories().then(renderCarousels);
});
