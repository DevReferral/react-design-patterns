const person = {
  name:"Chiranjeev",
  age:'12',

}

const proxyPerson = new Proxy(person,{
  get(obj,prop){
    console.log("The value of the object is",obj[prop])
    return Reflect.get(obj,prop)
  },
  set(obj,prop,value){
    Reflect.set(obj,prop,value)

    console.log("The value of the object is",obj[prop])
    
     return Reflect.get(obj,prop)
     
  }
  
})

console.log(proxyPerson.age)

proxyPerson.name="Pikaa"

console.log(proxyPerson.name)

proxyPerson.age=19

console.log(proxyPerson.age)