
 // TODO 3:
 //Import fruits dari data/fruits.js

const fruits = require('../data/fruits.js');


// TODO 4: Buat method index
 
// Kita Gunakan Arrow Function
const index = () => {
    for(const fruit of fruits) {
        console.log(fruit);
    }
}



//  TODO 5: Buat method store
const store = (name) =>{
    fruits.push (name)
    index()
  
}


 //TODO 6: Buat method update
const update = (position, name) => {
    fruits[position] = name
    index()
 
}


  //TODO 7: Buat method destroy
const destroy = (position) => {
    fruits.splice(position,1)
    index()
 
}


 // TODO 8: export semua method
module.exports = { index, store, update, destroy };