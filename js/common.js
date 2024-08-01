// Config Axios client
const client = axios.create({
  baseURL: "https://dummyjson.com/",
});

// CATEGORY
async function getCategories() {
  const res = await client.get("products/categories");
  return res.data;
}

function renderCategories(categories = []) {
  const $categories = $(".categories-dropdown");

  categories.forEach((cat) =>
    $(
      `<div><a class="dropdown-item list-style-none" href="collection.html?category=${cat.slug}">${cat.name}</a></div>`
    ).appendTo($categories)
  );
}

// SEARCH
function onSearchFormSubmit(e) {
  e.preventDefault();

  const $searchInput = $(".search-input");
  const query = $searchInput.val().trim();

  if (query.length === 0) {
    return;
  }

  $searchInput.val("");
  window.location.href = `search.html?q=${query}`;
}

// SHOPING CART

$(function () {
  getCategories().then(renderCategories);
  $(".header .search-form").submit(onSearchFormSubmit);
});
