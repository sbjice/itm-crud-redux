import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ProductApp } from './entities/ProductApp';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductApp/>
      </div>
    </Provider>
  );
}

export default App;
