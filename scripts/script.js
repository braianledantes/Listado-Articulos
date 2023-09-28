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
    },
    {
        id: self.crypto.randomUUID(),
        name: "Publis Node.js Package",
        price: 2500,
        image: "data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9IjI1NiIgd2lkdGg9IjI1NSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayI+PGRlZnM+PGZpbHRlciBpZD0iYSIgaGVpZ2h0PSIxMDIuNCUiIHdpZHRoPSIxMDIuMSUiIHg9Ii0xJSIgeT0iLS42JSI+PGZlT2Zmc2V0IGR5PSIxIiBpbj0iU291cmNlQWxwaGEiIHJlc3VsdD0ic2hhZG93T2Zmc2V0T3V0ZXIxIi8+PGZlR2F1c3NpYW5CbHVyIGluPSJzaGFkb3dPZmZzZXRPdXRlcjEiIHJlc3VsdD0ic2hhZG93Qmx1ck91dGVyMSIgc3RkRGV2aWF0aW9uPSIuNSIvPjxmZUNvbG9yTWF0cml4IGluPSJzaGFkb3dCbHVyT3V0ZXIxIiB2YWx1ZXM9IjAgMCAwIDAgMC45OTk5MDE4MzEgMCAwIDAgMCAxIDAgMCAwIDAgMC45OTk4Nzk4OTcgMCAwIDAgMC41IDAiLz48L2ZpbHRlcj48cGF0aCBpZD0iYiIgZD0iTTMyIDgwLjQ1NnY5NS42MTZjMCA1Ljc2IDMuODQgMTAuNzUyIDkuNiAxMi40MTZsODMuMiAyMi4xNDRjMi4wNDguNjQgNC4zNTIuNjQgNi40IDBsODMuMi0yMi4xNDRjNS43Ni0xLjY2NCA5LjYtNi42NTYgOS42LTEyLjQxNlY4MC40NTZjMC01Ljc2LTMuODQtMTAuNzUyLTkuNi0xMi40MTZsLTgzLjItMjIuMjcyYTE3LjkyIDE3LjkyIDAgMDAtNi40IDBMNDEuNiA2OC4wNGMtNS43NiAxLjY2NC05LjYgNi42NTYtOS42IDEyLjQxNnptODkuNiAxMTYuMzUybC03Ni44LTIwLjM1MlY4OS44bDc2LjggMjAuNjA4ek00NC44IDc3bDMyLTguNTc2TDE2MCA5MC41NjhsLTMyIDguNTc2em0xNjYuNCA5OS40NTZsLTc2LjggMjAuMzUydi04Ni40bDI1LjYtNy4wNFYxMzQuNmwyNS42LTYuNzg0Vjk2LjU4NGwyNS42LTYuNzg0em0tMjUuNi05Mi42NzJMMTAyLjQgNjEuNjRsMjUuNi02Ljc4NEwyMTEuMiA3N3oiLz48L2RlZnM+PGcgZmlsbD0ibm9uZSI+PHVzZSBmaWxsPSIjMDAwIiBmaWx0ZXI9InVybCgjYSkiIHhsaW5rOmhyZWY9IiNiIi8+PHVzZSBmaWxsPSIjNDIzNjA4IiB4bGluazpocmVmPSIjYiIvPjwvZz48L3N2Zz4=",
        isPopular: true,
        created: getNewDate()
    },
    {
        id: self.crypto.randomUUID(),
        name: "Webpack",
        price: 2500,
        image: "data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiBoZWlnaHQ9IjQ4IiB3aWR0aD0iNDgiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0iTTI0LjUgMEw0NiAxMnYyNEwyNC41IDQ4IDMgMzZWMTJ6IiBmaWxsPSIjZmZmIi8+PHBhdGggZD0iTTQyLjE2IDM1LjE3MmwtMTYuOTUgOS40NnYtNy4zNjhsMTAuNTYxLTUuNzMyem0xLjE2LTEuMDM2VjE0LjM1MmwtNi4yMDMgMy41MzJWMzAuNnpNNi43NyAzNS4xNzJsMTYuOTUyIDkuNDZ2LTcuMzY4TDEzLjE2IDMxLjUzMnptLTEuMTU5LTEuMDM2VjE0LjM1Mmw2LjIwMyAzLjUzMlYzMC42em0uNzI2LTIxLjA2NGwxNy4zODUtOS43MDR2Ny4xMjRsLTExLjEzOCA2LjA0NC0uMDg1LjA0OHptMzYuMjU3IDBMMjUuMjEgMy4zNjh2Ny4xMjRsMTEuMTM3IDYuMDQ0LjA4NS4wNDh6IiBmaWxsPSIjOGVkNmZiIi8+PHBhdGggZD0iTTIzLjcyMiAzNS41ODhsLTEwLjQyLTUuNjUydi0xMS4ybDEwLjQyIDUuOTM2em0xLjQ4OCAwbDEwLjQyLTUuNjUydi0xMS4ybC0xMC40MiA1LjkzNnpNMTQuMDA3IDE3LjQ0bDEwLjQ2LTUuNjc2IDEwLjQ2IDUuNjc2LTEwLjQ2IDUuOTZ6IiBmaWxsPSIjMWM3OGMwIi8+PC9zdmc+",
        isPopular: true,
        created: getNewDate()
    },
    {
        id: self.crypto.randomUUID(),
        name: "Datadog Syntetics",
        price: 2500,
        image: "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMjgiIGhlaWdodD0iMTI4Ij4KICAgIDxwYXRoIGQ9Ik0xMTguNjQsNjMuMDlsNS4xNSw1MC4yLTYzLjA4LDcuNTktMS4zNy05Ljc4LTMuODEuNTVjLjMzLDUuNDUtLjk0LDEwLjYzLTMuMzUsMTMuMTEtMi44MiwyLjg5LTYuOTIsMy42NC0xMS4yNCwzLTIuOS0uMzktNS4wNi0yLjQ5LTYuNjYtNS4wNiw2LDQuMjIsMTMuMzksMi4yNywxNS45Mi0xLjI2YTEyLjY1LDEyLjY1LDAsMCwwLDIuMzgtOS40MmwtMzUuNDIsNS4xNEw0LjIxLDEyLjE4LDEwOS4yNywwbDYuMTYsNjMuN1oiIGZpbGw9IiM2MzJjYTYiLz4KICAgIDxwYXRoIGQ9Ik02My41NSw3NC4zMmE1NS4yLDU1LjIsMCwwLDEtMTAtOC4zMmMtLjMxLS4yMy0uMjYtMS4yNS0uMjYtMS4yNUE1NS44MSw1NS44MSwwLDAsMCw2OC45NCw3My4xYTEyLjc0LDEyLjc0LDAsMCwwLDkuODEtLjgzLDI1LDI1LDAsMCwwLDcuNTMtNi42NGwuMzQuNTlhMTQuOTMsMTQuOTMsMCwwLDEtMS4yOSwzLjA2LDgsOCwwLDAsMCwyLjI0LjgxbDYtLjkzYTE4LjEyLDE4LjEyLDAsMCwwLDItMTQuMzFjLS45My0zLTUuNzktOS4xLTYuMTQtOS40My0xLjIyLTEuMTcuMjEtNS43LTIuMjEtMTAuNjVDODQuNjUsMjkuNTQsNzgsMjQuMDksNzUuMDksMjEuNzJjLjg1LjYyLDYuMSwyLjc0LDguNTUsNS42OS4yMy0uMy4zMi0xLjg5LjUzLTIuMjktMi4xLTIuNzYtMi4yNi03LjY2LTIuMjYtOUExNC44NywxNC44NywwLDAsMCw4MC42OSwxMWE4LjE2LDguMTYsMCwwLDEsMi42NSw0LjUzLDE4LjUxLDE4LjUxLDAsMCwwLDMuODIsOC4zNGMzLjQzLDQuMjYsNi41Miw2LjQ1LDguMDgsNC44OCwxLjg4LTEuOS0xLjg5LTEwLjM3LTYuNzEtMTUuMS01LjYyLTUuNTItNy4wOS00LjgxLTEwLjM5LTMuNjMtMi42My45NC00LDguNC0xMC45MSw4LjI2LTEuMTYtLjE0LTQuMTUtLjIxLTUuNjQtLjJDNjIuMzYsMTcsNjMsMTYuMjEsNjMsMTYuMjFhMzUuNjEsMzUuNjEsMCwwLDAtNC4yNSwyLjA5bC0uMTUtLjIyQTEyLDEyLDAsMCwxLDYwLDE1LjhhNDAuNTYsNDAuNTYsMCwwLDAtMy41MSwyLjQzLDUuMjUsNS4yNSwwLDAsMSwxLjQ1LTIuNzFzLTIuMzIuNDEtNS4yOCwzLjY3QTM2LDM2LDAsMCwwLDQ1LjgsMjEuOWMtNC4zNS0uOTUtNi40MS0yLjQ5LTguMzctNS4zMS0xLjQ5LTIuMTUtNC4xNS0yLjQ4LTYuODUtMS4zNy00LDEuNjQtOSwzLjg3LTksMy44N3MxLjYzLS4wNiwzLjMzLDBhNDQuNjgsNDQuNjgsMCwwLDAtNC41NiwyLjA5czEuMDksMCwyLjQ0LDBBMjIuOTMsMjIuOTMsMCwwLDEsMjAuNSwyMi45YTMzLDMzLDAsMCwwLTMuODUsMy4zMywyMi41NiwyMi41NiwwLDAsMSwyLjc0LTFjLS45LDIuMDctMi43LDMuNi0yLjM3LDYuMTQuMzIsMi4zMywzLjE3LDcuMTEsNi44NSwxMCwuMzIuMjYsNS4zNCw0LjkxLDkuMTMsM3M1LjI5LTMuNiw1LjkxLTYuMjFjLjczLTMsLjMyLTUuMjYtMS4yNS0xMS43NS0uNTItMi4xNC0xLjg2LTYuNTYtMi41MS04LjY3bC4xNS0uMTFBMTA2LjA2LDEwNi4wNiwwLDAsMSw0MSwzMS44QzQzLDM5LDQyLjM2LDQyLjY4LDQxLjQ0LDQ0Yy0yLjc1LDQtOS44LDQuNTgtMTMsMi4zNC0uNDksNy43OCwxLjI0LDExLjIsMS44MywxMi45Mi0uMjksMiwxLDUuNjcsMSw1LjY3QTcsNywwLDAsMSwzMiw2Mi40YTE2LjUzLDE2LjUzLDAsMCwwLDEuMTQsNC4zMUE4LjE5LDguMTksMCwwLDEsMzMuNTIsNjRhMTkuNTYsMTkuNTYsMCwwLDAsMS43MSwyLjE0QTExLjYsMTEuNiwwLDAsMCwzNyw2OS44LDkuODcsOS44NywwLDAsMSwzNyw2Ny41YzIuOTQsMi44MiwzLjQ1LDcsMy43NCwxMC4xMkM0MS41Miw4Ni4zMywyNyw5My4yNSwyNC4xMyw5OC43MWMtMi4xNCwzLjIzLTMuNDIsOC4zMy4yLDExLjM1LDguNzYsNy4yNyw1LjQsOS4yNyw5Ljc4LDEyLjQ3LDYsNC4zOCwxMy41NCwyLjQyLDE2LjEtMS4xNSwzLjU2LTUsMi42NS05LjY1LDEuMzItMTQtMS0zLjQzLTMuODQtOS4xMi03LjMyLTExLjMzYTE1LjI2LDE1LjI2LDAsMCwwLTEwLTIuMzdsLjI3LS4zMWM0LjIyLS44NCw4LjYyLS4zOCwxMS44MSwxLjY4LDMuNjIsMi4zMiw2LjkzLDYuMzEsOC42NiwxMi40MywyLS4yOCwyLjI0LS40MSw0LS42NmwtNC0zMS41Wk04My44NSwzNWMzLjczLDEuNzMsMy4yNCw1LDMuMzQsN2E1LjI1LDUuMjUsMCwwLDEsMCwxLjE5LDUsNSwwLDAsMC0yLjYyLS40Myw5LjQ5LDkuNDksMCwwLDAtMS4xLjEyLDcuNzgsNy43OCwwLDAsMS0zLTMuNzFsLS4xNy0uMzktLjA3LS4xNywwLS4wOGMtLjQyLTEuMzEtLjE0LTEuNTcsMC0ycy44NS0uNzYtLjE1LTEuMWExLjgsMS44LDAsMCwwLS4zMS0uMDdDODAuNDcsMzQuNTQsODIuNDQsMzQuMzQsODMuODUsMzVabS00LjYsMjEuNjNjLjcyLS41Nyw0LTEuNjIsNy4wOS0yLDEuNi0uMTksMy44OC0uMjksNC4zNywwLDEsLjUzLDEsMi4xOC4zMSwzLjcyLTEsMi4yMi0yLjMzLDQuNjctMy44OCw0Ljg3LTIuNTIuMzQtNC45MS0xLTcuNjMtMy4wNkEyLjIzLDIuMjMsMCwwLDEsNzkuMjUsNTYuNjJaTTU1LjM0LDM5Ljc1YzQtMi43Myw5LjE2LTEuNjUsOC4zLS44My0xLjY1LDEuNTYuNTQsMS4xLjc4LDRhNSw1LDAsMCwxLTEuMTIsNEEyNS40OSwyNS40OSwwLDAsMCw1OC43LDQ4YTI2LDI2LDAsMCwwLTIuODUsMS4xMyw3LjMyLDcuMzIsMCwwLDEtLjczLS41NUE1LjUzLDUuNTMsMCwwLDEsNTUuMzQsMzkuNzVabTYwLjExLDI3LjgyLTMyLjUxLDUuOWExNiwxNiwwLDAsMS0zLjc1LDMuMzMsMTEuNzUsMTEuNzUsMCwwLDEtOS4yOS44NSwyMCwyMCwwLDAsMS0zLjcxLTEuMTlsLTcuOTUsMS4xLDQuODMsNDAuMiw1NS43LTEwWk02NS44OCwxMTMuOTJsLS40Ni00LjM3LDkuMDktMTMuODgsMTAuMzMsMyw4Ljg4LTE0Ljg0LDEwLjY1LDcsOC4xLTE3LDIuODcsMzAuOTFaIiBmaWxsPSIjZmZmIi8+Cjwvc3ZnPgo=",
        isPopular: true,
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

    articles.unshift(newArticle);
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
        <p>💲${article.price}</p>
        <p>${article.isPopular ? "Popular 😺" : "No Pupular 😿"}</p>
        <p>${article.created}🖊️</p>
    </li>`
        articleList.innerHTML += articleLi;
    }

}