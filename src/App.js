import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart';
import ProduceList from './components/ProduceList';
import { populateProduce } from './store/produce';
import { showHideCart } from './store/cart';

function App() {

  const dispatch = useDispatch();
  // const [showCart, setShowCart] = useState(false);
  const showCart = useSelector((state) => state.showCart.showCart);
  console.log('showcart',showCart);

  useEffect(() => {
    dispatch(populateProduce())
  }, [dispatch]) 
  
  return (
    <>
      <nav>
        <h1>Grocery Store</h1>
        <button className="checkout-button" onClick={() => dispatch(showHideCart(true))}>
          <i className="fas fa-shopping-bag" />
          Checkout
        </button>
      </nav>
      <main style={showCart === true ? { marginRight: '300px' } : {}} >
        <ProduceList />
      </main>
      <div
        className="sidebar"
        style={showCart === true ? { transform: 'translateX(-100%)' } : {}}
      >
        <div className="sidebar-header">
          <button className="arrow-button" onClick={() => dispatch(showHideCart(false))}>
            <i className="fas fa-arrow-right"></i>
          </button>
        </div>
        <Cart />
      </div>
    </>
  );
}

export default App;