class Observable{
    
    constructor(){
      this.observers =[]
    }

    subscribe(fn){
      this.observers.push(fn)
    }

    unsubscribe(fn){
       this.observers= this.observers.filter( obs => obs!==fn)
    }

    notify(data){
       this.observers.forEach(obs => obs(data))
    }

}

export default Observable;