let blog = [{ 1: "post1" }, { 2: "post2" }, { 3: "post3" }];

function showPosts() {
  blog.map((post) => console.log(post));
}

function addPost(newPost) {
  const promise1 = new Promise((resolve, reject) => {
    blog.push(newPost);
  });
  return promise1;
}

addPost({ 4: "post4" })
  .then(() => showPosts())
  .catch((err) => console.log(err));

showPosts();
