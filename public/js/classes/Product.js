export default class Product {
    idProduit;
    categorie;
    nom;
    description;
    prix;
    image;

    constructor(idProduit, categorie, nom, description, prix, image) {
        this.idProduit = idProduit;
        this.categorie = categorie;
        this.nom = nom;
        this.description = description;
        this.prix = prix;
        this.image = image;
    }
    render() {
        const productContainer = document.createElement("div"),
            productCategoryDiv = this.categorie.render(),
            productNameDiv = document.createElement("div"),
            productDescriptionDiv = document.createElement("div"),
            productPriceDiv = document.createElement("div"),
            productImgContainer = document.querySelector("#carousel_img_container"),
            productDiv = document.createElement("div"),
            productImg = document.createElement("img"),
            productAddToCartButton = document.createElement("button");

        productContainer.classList.add("product_container");
        productNameDiv.classList.add("slide_delay1");
        productDescriptionDiv.classList.add("slide_delay2");
        productPriceDiv.classList.add("slide_delay3");
        productAddToCartButton.classList.add("add_to_cart_button" + this.idProduit);

        productNameDiv.innerText = this.nom;
        productDescriptionDiv.innerText = this.description;
        productPriceDiv.innerText = `${this.prix}€`;
        productImg.src = this.image;
        productAddToCartButton.innerText = "Add to cart"

        productContainer.appendChild(productCategoryDiv);
        productContainer.appendChild(productNameDiv);
        productContainer.appendChild(productDescriptionDiv);
        productContainer.appendChild(productPriceDiv);
        productImgContainer.appendChild(productDiv);
        productDiv.appendChild(productImg);
        productContainer.appendChild(productAddToCartButton);

        return productContainer;
    }
    addToCart(product) {

        const productAddToCartButton = document.querySelector(".add_to_cart_button" + this.idProduit);

        productAddToCartButton.addEventListener("click", function () {
            let oldItems = JSON.parse(localStorage.getItem("cart")) || [],
                match = oldItems.find(function (item) {
                    return item["idProduit"] === product.idProduit;
                }),
                quantity = 1;

            if (match) {
                match["quantityProduit"] += quantity;
            } else {
                let newItem = {
                    "idProduit": product.idProduit,
                    "nomProduit": product.nomProduit,
                    "quantityProduit": quantity,
                    "prixProduit": product.prixProduit,
                    "imgProduit": product.imgProduit
                };
                oldItems.push(newItem);
            }
            localStorage.setItem("cart", JSON.stringify(oldItems));
        })
    }
}