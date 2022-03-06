import logo from './logo.svg';
import './App.css';
import CompA from './Components/ComponentA';
import CompB from './Components/ComponentB';
import CompC from './Components/ComponentC';
import CompD from './Components/ComponentD';
import { PriceContextProvider } from './Context/Store';
function App() {
  return (
    <>
    <PriceContextProvider>
    <CompA/>
    <CompB/>
    <CompC/>
    <CompD/>
    </PriceContextProvider>
     
    </>
  );
}

export default App;
