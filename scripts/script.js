const nameInput = document.getElementById('name');
const priceLabel = document.getElementById('price-label');
const priceInput = document.getElementById('price');
const imageInput = document.getElementById('image');
const popularInput = document.getElementById('popular');
const btnCreate = document.getElementById('btnCreate');
const articleList = document.getElementById('articleList');
const btnDeleteAll = document.getElementById('btnDeleteAll');
const popularCheck = document.getElementById('popular-check');

const articles = [
    {
        id: self.crypto.randomUUID(),
        name: "Braian Ledantes",
        price: 2500,
        image: "https://res.cloudinary.com/hdsqazxtw/image/upload/v1686846737/i9ohkkugxeaj18egynlx.jpg",
        isPopular: true,
        created: getNewDate()
    },
    {
        id: self.crypto.randomUUID(),
        name: "Morty Malvado",
        price: 2500,
        image: "https://firefoxusercontent.com/48a3d01a12257b08f085f0f6db363a0f",
        isPopular: false,
        created: getNewDate()
    }
];

const profit = prompt("Ingrese el porcentaje de ganancia", 20)
priceLabel.textContent += ` (más ${profit}%)`;

renderArticleList(articles)

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

    articles.push(newArticle);
    renderArticleList(articles);

    clearInputs()

    alert("Nuevo articulo creado con id " + newArticle.id)
    console.log("new article created", newArticle);
});

btnDeleteAll.addEventListener('click', () => {
    articles.splice(0, articles.length);
    renderArticleList(articleList);
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
    return Math.round(price * (1 + (profit / 100)) * 100) / 100
}

function getNewDate() {
    return new Date().toLocaleString();
}

function clearInputs() {
    nameInput.value = "";
    priceInput.value = "";
    imageInput.value = "";
    popularInput.checked = false;
}

function renderArticleList(list) {
    articleList.innerHTML = ""

    for (let i = 0; i < list.length; i++) {
        const article = list[i];
        const articleLi = `<li class="article">
        <img src="${article.image}">
        <h3>${article.name}</h3>
        <p>Precio: 💲${article.price}</p>
        <p>${article.isPopular ? "Popular 😺" : "No Pupular 😿"}</p>
        <p>Creado: ${article.created}</p>
    </li>`
        articleList.innerHTML += articleLi;
    }

}