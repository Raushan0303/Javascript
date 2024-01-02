class Product {
    discount = 10; //data memeber
    constructor(n,p){
        //constructor fucntion to create new real life instances called as object
        // when we create an object this constructor is the first fucntion that gets called
        this.name = n; //data member
        this.price=p; //data member

    }

    //member Function
    displayProduct(){
        console.log(this.name,this.price,this.discount);
    }
    buyProduct(){
       
    }
}

let iphone = new Product("Iphone 11",40000);
let macbook = new Product("mac1",125000);
console.log(iphone);
iphone.displayProduct();