let count = 0;
// same instance is shared by all instances that have this counter
const counter={

   increment() {
     return count++;
   },

   decrement() {
     return count--
   },

   getCount() {
      return count
   }

};

Object.freeze(counter)

export { counter };
