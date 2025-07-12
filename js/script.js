
document.addEventListener("DOMContentLoaded", () => {
  const productList = document.getElementById("productList");
  const searchInput = document.getElementById("searchInput");

  const products = [
    { name: "Quạt làm mát", price: "499.000₫", image: "images/quat1.jpg" },
    { name: "Máy xay sinh tố", price: "599.000₫", image: "images/mayxay1.jpg" },
    { name: "Nồi cơm điện", price: "899.000₫", image: "images/noicom1.jpg" },
    { name: "Máy lọc nước", price: "1.299.000₫", image: "images/locnuoc1.jpg" }
  ];

  function renderProducts(list) {
    productList.innerHTML = "";
    list.forEach(p => {
      const div = document.createElement("div");
      div.className = "product";
      div.innerHTML = \`
        <img src="\${p.image}" alt="\${p.name}">
        <h4>\${p.name}</h4>
        <p>\${p.price}</p>
      \`;
      productList.appendChild(div);
    });
  }

  renderProducts(products);

  if (searchInput) {
    searchInput.addEventListener("input", () => {
      const keyword = searchInput.value.toLowerCase();
      const filtered = products.filter(p => p.name.toLowerCase().includes(keyword));
      renderProducts(filtered);
    });
  }
});
