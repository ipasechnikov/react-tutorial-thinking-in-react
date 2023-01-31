import './App.css';
import FilterableProductTable from './components/FilterableProductTable';
import products from './data/products.json';

function App() {
  return (
    <div>
      <FilterableProductTable products={products}/>
    </div>
  );
}

export default App;
