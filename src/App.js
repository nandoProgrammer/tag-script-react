import React, { useEffect } from "react";
import './App.css';

const App = () => {

  useEffect(() => {
    const script = document.createElement("script");
    const scriptText = document.createTextNode("alert('Chamando Script')");
    script.appendChild(scriptText);
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <h1>Adiciona Script em página</h1>
  );
}

export default App;
