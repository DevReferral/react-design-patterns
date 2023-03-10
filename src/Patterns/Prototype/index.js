const dog={
   
   bark(){

    console.log("Gulisto bhow bhow")
   }
}


const myDog= Object.create(dog)

myDog.bark()

console.log("myDog Keys",Object.keys(myDog))
console.log("Properties on myDog Prototype",Object.keys(myDog.__proto__))