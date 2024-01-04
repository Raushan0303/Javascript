const player1 = {
    firstname: 'Raushan',
    lastname: 'Choudhary',
    numberToBat : 1,
    canBowl : false,
    getDetails : function(){
        console.log(this.firstname,this.lastname,"comes at No.",this.numberToBat);
    }
}

// const obj = function(){
//     console.log(this.getDetails());
// }

// let x = obj.bind(player1);
// x();
const obj = function(x, y) {
    console.log(x + y);
    this.getDetails();
}

obj.call(player1, 2, 45);