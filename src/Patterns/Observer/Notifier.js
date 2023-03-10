import { Button, FormControlLabel, Switch } from '@mui/material';
import { ToastContainer, toast } from "react-toastify";
import observable from './';


function handleClick() {

  observable.notify("User clicked button!");

}

function handleToggle() {
  observable.notify("User toggled switch!");
}


function logger(data) {
  console.log(`${Date.now()} ${data}`);
}
 
function toastify(data) {
  toast(data);
}

observable.subscribe(logger);
observable.subscribe(toastify);
 
export default function Notifier() {
  return (
    <div className="App">
      <Button onClick={handleClick}>Click me!</Button>
      <FormControlLabel label="toggle-me" control={<Switch name='' onChange={handleToggle} />} />
      <ToastContainer />
    </div>
  );
}