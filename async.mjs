const fetch = require("node-fetch");

async function fetchPost(postId) {
  const response = await fetch(
    `http://jsonplaceholder.typicode.com/posts/${postId}`
  );
  const data = await response.json();
  return data.userId;
}

function fetchUserId(postId) {
  return fetch(`http://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(res => res.json())
    .then(post => {
      console.log(" LOG ___ post ", post);
      return post.userId;
    });
}

const res = fetchPost(1);
console.log(" LOG ___ res ", res);
const promiseFetch = fetchUserId(1).then(e => e);
console.log(" LOG ___ promiseFetch ", promiseFetch);
