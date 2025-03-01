
function main() {
  let rectangle = new Rectangle();
  rectangle.setWidth(100);
  rectangle.setHeight(50);
  console.log(rectangle.getArea()); // 5000

  let square = new Square();
  square.setWidth(100);
  square.setHeight(50);
  console.log(square.getArea()); // 2500
}

main();