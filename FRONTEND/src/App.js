import './App.css';
import {
  RouterProvider,
} from "react-router-dom";
import { router } from "./router"
import MainContext from './components/Context';

function App() {

  return (
  <MainContext>
    <RouterProvider router={router}>
    
        <div className="App">

        </div>
      
    </RouterProvider>

</MainContext>

  );
}

export default App;
