function Product(n,p){
    this.name= n;
    this.price = p;
    this.display = function(){
        console.log(this.name,this.price);
    }
    // if we use new assume -> return this
    return 10;
}
const p1 = new Product("Iphone",10000);
console.log(p1);
p1.display();