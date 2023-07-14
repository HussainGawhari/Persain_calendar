import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";
import  Months  from "./components/Months";
import { About } from "./components/About";

const App = () => {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Months /> 
        <About />       
      </BrowserRouter>
    </>
  );
};

export default App;
