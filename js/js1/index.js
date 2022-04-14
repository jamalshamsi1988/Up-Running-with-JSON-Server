const renderPosts= async () =>{
    let uri="http://localhost:300/posts";
    const res= await fetch(uri);
    const posts= await res.json();

    let template="";
    posts.forEach(post => {
        template += "
        <section class="post">
        <h2>${post.title}</h2>
        <p><smal>${post.likes} likes </smal></p>
        <p>${post.body.slice(0,200)}</p>
        <a href="./js/details.html">read more..</a>
        </section> "
    });
}



window.addEventListener('DOMContentLoded',()=> renderPosts());