function Product(n, p, c) {
    this.name = n;
    this.price = p;
    Category.call(this, c);
}

function Category(c) {
    this.categoryName = c;
  
}
Category.prototype.getcategoryName= function (){
    console.log("called");
    console.log(this.categoryName);
}


Product.prototype = Object.create(Category.prototype);

let p = new Product("iPhone", 100000, "Electronics");
console.log(p);
p.getcategoryName();