import Article from "../classes/Article.js"; // Class

const response = await fetch("src/scripts/getArticlesJson.php");
const articles = await response.json();

articles.forEach(article => {
    const data = new Article(
        article.nomArticle, 
        article.descriptionArticle, 
        article.contentArticle, 
        article.imgArticle);

    const allArticlesContainer = document.querySelector(".all_articles_container"),
        articleContainer = data.appendArticles();

        allArticlesContainer.appendChild(articleContainer);
});
