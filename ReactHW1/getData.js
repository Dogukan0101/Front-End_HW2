import axios from "axios";

export async function getData(userID) {
  const user = await axios.get(
    `https://jsonplaceholder.typicode.com/users/${userID}`
  );
  const posts = await axios.get(
    `https://jsonplaceholder.typicode.com/posts?userId=${userID}`
  );
  let result = await { user, posts };
  return result;
}
