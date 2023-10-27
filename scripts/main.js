const nameInput = document.getElementById('name');
const priceLabel = document.getElementById('price-label');
const priceInput = document.getElementById('price');
const imageInput = document.getElementById('image');
const popularInput = document.getElementById('popular');
const btnCreate = document.getElementById('btnCreate');
const btnCreateRandom = document.getElementById('btnCreateRandom');
const articleList = document.getElementById('articleList');
const btnDeleteAll = document.getElementById('btnDeleteAll');
const popularCheck = document.getElementById('popular-check');

const articles = getArticles();

renderArticleList(articles);

btnCreateRandom.addEventListener('click', () => {
    fetch('https://elbardelafai-dev.fl0.io/api/ingredients/randoms')
        .then(res => {
            if (!res.ok) {
                throw Error("Error al obtener datos")
            }
            return res.json();
        })
        .then(article => {
            nameInput.value = article.name
            priceInput.value = article.price
            imageInput.value = article.srcImage
            popularInput.checked = article.isPopular
        })
        .catch(err => {
            swal({
                title: "No se ha podido generar un artículo aleratorio",
                text: err.message,
                icon: "error"
            })
        })
});

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

    Toastify({
        text: `Artículo "${newArticle.name}" creado`,
        duration: 3000,
        gravity: "bottom",
        position: "right",
        destination: `#${newArticle.id}`,
        style: {
            border: "1px solid black",
            boxShadow: "1px 1px 5px black",
            borderRadius: "15px",
            padding: "1rem",
            color: "black",
            background: "#ccc",
        }
    }).showToast();
});

btnDeleteAll.addEventListener('click', () => {
    swal({
        title: "¿Seguro desea eliminar todos los artículos?",
        text: "Una vez eliminados no podran ser recuperados!",
        buttons: true,
        dangerMode: true,
    })
        .then((deleteAll) => {
            if (deleteAll) {
                deleteAllArticles();
            }
        });
});

popularCheck.addEventListener('click', () => {
    const filterPopulars = popularCheck.checked;

    let listToRender = articles
    if (filterPopulars) {
        listToRender = articles.filter(art => art.isPopular)
    }

    renderArticleList(listToRender);
});

function deleteAllArticles() {
    removeAllArticles();
    renderArticleList(articles);
}

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
    const filterPopulars = popularCheck.checked;

    if (filterPopulars && !article.isPopular) return;

    const articleLi = createArticleLiElement(article);
    articleList.prepend(articleLi);
}

function createArticleLiElement(article) {
    const articleLi = document.createElement("li");
    articleLi.id = article.id;
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

    articleLi.append(img, nameTitle, priceParagraph, popularParagraph, dateParagraph);
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
