const nameInput = document.getElementById('name');
const priceLabel = document.getElementById('price-label');
const priceInput = document.getElementById('price');
const imageInput = document.getElementById('image');
const popularInput = document.getElementById('popular');
const btnCreate = document.getElementById('btnCreate');
const articleList = document.getElementById('articleList');
const btnDeleteAll = document.getElementById('btnDeleteAll');
const popularCheck = document.getElementById('popular-check');

const articles = getArticles();

renderArticleList(articles);

btnCreate.addEventListener('click', () => {
    const name = nameInput.value;
    const price = priceInput.value;
    const image = imageInput.value;
    const isPopular = popularInput.checked;

    const newArticle = {
        "id": self.crypto.randomUUID(),
        "name": name,
        "price": calculatePrice(price),
        "image": image,
        "isPopular": isPopular,
        "created": getNewDate()
    }

    articles.unshift(newArticle);
    saveArticles();
    renderNewArticle(newArticle);

    clearInputs();
});

btnDeleteAll.addEventListener('click', () => {
    removeAllArticles();
    renderArticleList(articles);
});

popularCheck.addEventListener('click', () => {
    const filterPopulars = popularCheck.checked;

    let listToRender = articles
    if (filterPopulars) {
        listToRender = articles.filter(art => art.isPopular)
    }

    renderArticleList(listToRender);
});

function calculatePrice(price) {
    return Math.round(price * 100) / 100;
}

function getNewDate() {
    return new Date().toLocaleString();
}

// funciones para manipular el DOM
function clearInputs() {
    nameInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    popularInput.checked = false;
}

function renderArticleList(list) {
    articleList.innerHTML = "";

    list.map(article => createArticleLiElement(article))
        .forEach(articleLi => {
            articleList.appendChild(articleLi);
        });
}

function renderNewArticle(article) {
    const articleLi = createArticleLiElement(article);
    articleList.prepend(articleLi);
}

function createArticleLiElement(article) {
    const articleLi = document.createElement("li");
    articleLi.className = "article";

    const img = document.createElement("img");
    img.src = article.image;
    const nameTitle = document.createElement("h3");
    nameTitle.textContent = article.name;
    const priceParagraph = document.createElement("p");
    priceParagraph.textContent = `💲${article.price}`;
    const popularParagraph = document.createElement("p");
    popularParagraph.textContent = `${article.isPopular ? "Popular 😺" : "No Pupular 😿"}`;
    const dateParagraph = document.createElement("p");
    dateParagraph.textContent = `${article.created}🖊️`;

    articleLi.append(img, priceParagraph, popularParagraph, dateParagraph);
    return articleLi;
}

// funciones referidas al almacenamiento en LocalStorage
function getArticles() {
    const articles = localStorage.getItem("articleList");
    return articles != null ? JSON.parse(articles) : [];
}

function saveArticles() {
    localStorage.setItem("articleList", JSON.stringify(articles));
}

function removeAllArticles() {
    articles.splice(0, articles.length);
    localStorage.setItem("articleList", JSON.stringify(articles));
}
