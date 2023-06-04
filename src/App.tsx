import './App.css';
import { ProductList } from './entities/ProductList';
import { store } from './store/store'
import { Provider } from 'react-redux'


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <div>
          <ProductList />
        </div>
      </div>
    </Provider>
  );
}

export default App;
