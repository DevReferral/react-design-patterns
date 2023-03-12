
import Counter from './Components/Counter';
import { StyledButton, StyledText } from './Patterns/HOCPattern';
import DogImages from './Patterns/HOCPattern/DogImages';
import Notifier from './Patterns/Observer/Notifier';
import ThemeContextComponent from './Patterns/Provider';
import Comp from './Patterns/Provider/Comp';
import Renderer from './Patterns/RenderPattern';
import Fahrenheit from './Patterns/RenderPattern/Fahrenheit';
import { counter } from './Patterns/Singleton/counter';
  function App() {
  return (
    <div>
      {/*Singleton pattern application 
     
     When we invoke the increment method in either redButton.js or blueButton.js, the value of the counter property on the Counter instance updates in both files. It doesn't matter whether we click on the red or blue button: the same value is shared among all instances. 
     
     This is why the counter keeps incrementing by one, even though we're invoking the method in different files.

      */}
      <Counter counter={counter}/>
      <Counter counter={counter}/>
      <ThemeContextComponent>
        <Comp/>
      </ThemeContextComponent>
    

     {/*
      << Observer Pattern >>
      */
    }
      <Notifier/>
      <StyledButton/>
      <StyledText/>
      {/* <DogImages/> */}
     
    <Renderer 
      render={(value)=>(

          <Fahrenheit value={value}/>

      ) 
      }
    
    /> 


     

    </div>
  );
}

export default App;
