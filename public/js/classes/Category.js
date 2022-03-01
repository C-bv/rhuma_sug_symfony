export default class Category {
    idCategorie;
    nomCategorie;

    constructor(idCategorie, nomCategorie) {
        this.idCategorie = idCategorie;
        this.nomCategorie = nomCategorie;
    };
    render() {
        const productCategoryDiv = document.createElement("div");

        productCategoryDiv.innerText = this.nomCategorie;
        productCategoryDiv.classList.add("slide_delay4");

        return productCategoryDiv;
    };
}