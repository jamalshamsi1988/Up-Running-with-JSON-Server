const container = document.querySelector(".blogs");
const renderPosts = async () => {
  let uri = "http://localhost:3000/post";

  const res = await fetch(uri);
  const posts = await res.json();

  let template = "";
  posts.forEach((post) => {
    template += `
        <section class="post">
        <h2>${post.title}</h2>
        <p><smal>${post.likes} likes </smal></p>
        <p>${post.body.slice(0, 200)}</p>
        <a href="./js/details.html?id=${post.id}">read more...</a>
        </section> 
        `;
  });

  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderPosts());