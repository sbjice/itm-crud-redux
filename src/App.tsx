import './App.css';
import { Provider } from 'react-redux';
import { store } from './store/store';
import { ProductListContainer } from './entities/ProductListContainer';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <ProductListContainer/>
      </div>
    </Provider>
  );
}

export default App;
