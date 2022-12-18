import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { removeFromCart, addOneToCart, removeOneFromCart, updateInputField } from '../../store/cart';

function CartItem({ item }) {
  const [count, setCount] = useState(item.count);
  const dispatch = useDispatch();
  const id = item.id;

  useEffect(() => {
    console.log('updating count', item);
    setCount(item.count);
    return count;
  }, [item.count]);

  return (
    <li className="cart-item">
      <div className="cart-item-header">{item.name}</div>
      <div className="cart-item-menu">
        <input
          type="number"
          value={count}
          onChange={(e) =>{dispatch(updateInputField(id, e.target.value))}}
        />
        <button
          className="cart-item-button"
          onClick={() => {
            dispatch(addOneToCart(id));
            }
          }
        >
          +
        </button>
        <button
          className="cart-item-button"
          onClick={() => {
            if(count === 1) {
              dispatch(removeFromCart(id));
              }
            else {
              dispatch(removeOneFromCart(id));
            }
            }
          }
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