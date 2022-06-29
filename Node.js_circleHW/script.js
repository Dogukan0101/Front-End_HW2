const arguments = process.argv.slice(2);
let r = arguments[0];

function circleArea(r) {
  let area = Math.PI * r ** 2;
  console.log(`r:${r}\narea:${area}`);
}
circleArea(r);
