import { getData } from "./getData.js";

let result = getData(1).then((response) => {
  console.log(response.user.data, "\nposts:", response.posts.data);
});
