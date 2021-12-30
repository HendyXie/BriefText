import { Provider } from 'react-redux';
import './App.css';
import { SearchBar,CarouselBanner, ListKategory, ListProduct } from './components/organism';
import store from './config/redux/store';

function App() {
  return (
    <Provider store={store}>
      <div className="App">
          <SearchBar/>
          <CarouselBanner/>
          <ListKategory/>
          <ListProduct/>
      </div>
    </Provider>
  );
}

export default App;
