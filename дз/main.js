const postsContainer = document.getElementById('posts');

const showPosts = (posts) => {
    posts.forEach((post) => {
        const article = document.createElement('article');
        const title = document.createElement('h2');
        const body = document.createElement('p');

        title.textContent = post.title;
        body.textContent = post.body;
        article.append(title, body);
        postsContainer.appendChild(article);
    });
};

fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => {
        if (!response.ok) {
            throw new Error(`Request failed: ${response.status}`);
        }

        return response.json();
    })
    .then(showPosts)
    .catch((error) => {
        postsContainer.textContent = `Не удалось загрузить посты: ${error.message}`;
        console.error(error);
    });
