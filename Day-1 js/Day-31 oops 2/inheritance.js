function Product(n, p, c) {
    this.name = n;
    this.price = p;
    Category.call(this, c);
}

function Category(c) {
    this.categoryName = c;
  
}


Product.prototype = Object.create(Category.prototype);

let p = new Product("iPhone", 100000, "Electronics");
Category.prototype.getcategoryName= function (){
    console.log("called");
    console.log(this.categoryName);
}

console.log(p);
p.getcategoryName();