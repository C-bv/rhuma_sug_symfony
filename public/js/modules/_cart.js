import Cart from "../classes/Cart.js"; //Class

const panier = JSON.parse(window.localStorage.getItem("cart"));
panier.forEach(element => {
    const data = new Cart(
        element.idProduit,
        element.nomProduit,
        element.quantityProduit,
        element.prixProduit,
        element.imgProduit);

    const cartForm = document.querySelector("form"),
    panierContainer = data.renderCart();

    cartForm.appendChild(panierContainer);
})