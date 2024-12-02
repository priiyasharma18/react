import Counter from "./component/counter";
import { store } from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <Counter/>
    </div>
    </Provider>
  );
}

export default App;
