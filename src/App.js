


import Menu from "./template/Menu";
import Products from "./template/Products";
import Slider from "./template/Slider";



function App() {
  return (
    <div className="App">
      <Menu />
      
      <Slider />
      <div style={{display: "flex", flexWrap:"wrap"}}>
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      <Products />
      </div>
 
     
     
    </div>
  );
}

export default App;
