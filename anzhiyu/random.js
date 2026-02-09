var posts=["2026/02/09/hello-world/","2026/02/09/Drogon框架/","2026/02/09/my-first/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };