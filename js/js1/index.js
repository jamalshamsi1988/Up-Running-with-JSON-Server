const renderPosts= async () =>{
    let uri="./**";
    const res= await fetch(uri);
    const postd= await res.json();
}



window.addEventListener('DOMContentLoded',()=> renderPosts());