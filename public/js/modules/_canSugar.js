import Product from "../classes/Product.js"; // Class
import Category from "../classes/Category.js"; // Class
import getProducts from "./_getProducts.js"; // Fetch
import productCarousel from "./_productCarousel.js";

const allProducts = await getProducts(2);

allProducts.forEach(product => {
    const categorie = new Category(product.categorie.idCategorie, product.categorie.nomCategorie);
    const data = new Product(
        product.idProduit,
        categorie,
        product.nomProduit, 
        product.descriptionProduit, 
        product.prixProduit, 
        product.imgProduit);

    const section = document.querySelector("section"),
        productContainer = data.render();

    section.appendChild(productContainer);
    data.addToCart(product);
});

productCarousel();