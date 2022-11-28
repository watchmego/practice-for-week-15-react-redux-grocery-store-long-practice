import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();
  console.log('item id', item.id);
  const id = item.id;

  useEffect(() => {
    setCount(item.count);
  }, [item.count]);

  // const removeFromCart = () => {
  //   console.log('removing');
  //   dispatch(removeFromCart(id))
  // }

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          defaultValue={count}
        />
        <button
          className="cart-item-button"
        >
          +
        </button>
        <button
          className="cart-item-button"
        >
          -
        </button>
        <button
          className="cart-item-button"
          onClick={() => dispatch(removeFromCart(id))}
        >
          Remove
        </button>
      </div>
    </li>
  );
}

export default CartItem;