import "./App.css";

import 'etherspot-react-wallet/dist/index.css';
import { useState, useEffect } from "react";


function App() {
  const [address, setAddress] = useState("0x");
  useEffect(() => {
    
 
    
   
  }, []);

 
  
  return (
    <div className="App">
      <header className="App-header">
   
      <p>{address}</p>
      </header>
    </div>
 
  );
}

export default App;
