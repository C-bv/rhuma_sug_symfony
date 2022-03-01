export default class Article {
    nom;
    description;
    content;
    image;

    constructor(nom, description, content, image) {
        this.nom = nom;
        this.description = description;
        this.content = content;
        this.image = image;
    };
    appendArticles() {
        const articleContainer = document.createElement("div"),
            articleTextContainer = document.createElement("div"),
            articleDescriptionDiv = document.createElement("div"),
            articleNameDiv = document.createElement("div"),
            articleContentDiv = document.createElement("div"),
            articleImgDiv = document.createElement("img");

        articleTextContainer.classList.add("article_text_container");
        articleDescriptionDiv.classList.add("slide_delay1");
        articleNameDiv.classList.add("slide_delay1");
        articleContentDiv.classList.add("slide_delay2");
        articleImgDiv.classList.add("slide_delay4");

        articleNameDiv.innerText = this.nom;
        articleDescriptionDiv.innerText = this.description;
        articleContentDiv.innerText = this.content;
        articleImgDiv.src = this.image;


        articleContainer.appendChild(articleTextContainer);
        articleContainer.appendChild(articleImgDiv);

        articleTextContainer.appendChild(articleDescriptionDiv);
        articleTextContainer.appendChild(articleNameDiv);
        articleTextContainer.appendChild(articleContentDiv);

        return articleContainer;
    };
}