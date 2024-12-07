import Counter from "./component/counter";
import { store } from "./store/store";
import { Provider } from "react-redux";
import Todo from "./component/todo";
import Item from "./component/item";
import Cart from "./component/cart";
import { CartContext } from "./component/context";
import Form from './component/form'
function App() {
  return (
  
    <div className="App">
    {/* <Item name='Macbook' price={100000}/>
    <Item name='Pendrive' price={4000}/>
    <Item name='watch' price={20000}/>
    <Cart/> */}
  <Form/>
    </div>
    
   
  );
}

export default App;
