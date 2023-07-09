import './App.css';
import { CartProvider } from './context/CartContext';
// import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import MainRouter from './routes/MainRouter';
const App = () =>{

  return (
    <div>
      <CartProvider>
        <MainRouter/>
      </CartProvider>
    </div>
  );
};

export default App;
