import "./App.css";
import { useEffect, useState } from "react";
import { fetchData } from "./helpers";

function App() {
  const [address, setAddress] = useState("0x");
  useEffect(() => {
    const promise = fetchData();
    promise.then((data) => {
      setAddress(data.user);
    });
  }, []);

 
  
  return (
    <div className="App">
      <header className="App-header">
      <div className="container mx-auto px-6 sm:px-12 flex items-center justify-end">
        <div>
            <button
            class="btn btn-primary"
            type="button">connect
           </button>
        </div>
        </div>
      <p>{address}</p>
      </header>
    </div>
 
  );
}

export default App;
