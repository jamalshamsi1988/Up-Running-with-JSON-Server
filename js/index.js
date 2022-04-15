const container = document.querySelector(".blogs");
const searchForm=document.querySelector(".search");

const renderPosts = async (term) => {
  let uri = "http://localhost:3000/posts?_sort=likes&_order=desc";

  if(term){
    uri +="&q=${term}";
  }

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
searchForm.addEventListener("submit" , (e) =>{
  e.preventDefault();
  renderPosts(searchForm.outerHTML.value.term())
})

window.addEventListener("DOMContentLoaded", () => renderPosts());