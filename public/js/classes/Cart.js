export default class Cart {
    idProduit;
    nom;
    quantity;
    prix;
    image;

    constructor(idProduit, nom, quantity, prix, image) {
        this.idProduit = idProduit;
        this.nom = nom;
        this.quantity = quantity;
        this.prix = prix;
        this.image = image;
    };

    renderCart() {
        const panierContainer = document.createElement("div"),
            productDiv = document.createElement("div"),
            productImg = document.createElement("img"),
            productNameDiv = document.createElement("input"),
            productUnitPriceDiv = document.createElement("div"),
            productPriceInput = document.createElement("div"),
            productQuantityInput = document.createElement("input");

        productImg.src = this.image;
        productNameDiv.value = this.nom;
        productUnitPriceDiv.innerText = `${this.prix} €`;
        productPriceInput.innerText = `${this.prix * this.quantity} €`;
        productQuantityInput.value = this.quantity;
            
        panierContainer.classList.add("cart_product_container");
        productNameDiv.disabled = true;
        productNameDiv.name = "nomProduit";
        productQuantityInput.disabled = true;
        productQuantityInput.name = "quantityProduit";

        productDiv.appendChild(productImg);
        panierContainer.appendChild(productDiv);
        panierContainer.appendChild(productNameDiv);
        panierContainer.appendChild(productUnitPriceDiv);
        panierContainer.appendChild(productPriceInput);
        panierContainer.appendChild(productQuantityInput);

        return panierContainer;
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