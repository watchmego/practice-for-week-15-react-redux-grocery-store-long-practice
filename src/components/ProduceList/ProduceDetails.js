import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToCart, showHideCart } from '../../store/cart';

function ProduceDetails({ produce }) {
  const cartItem = {};
  const dispatch = useDispatch();
  const [produceLiked, setLiked] = useState(produce.liked);

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produceLiked ? " selected" : "")}
          onClick={() => {
            setLiked(produceLiked === false ? true : false);
            }
          }
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cartItem ? " selected" : "")}
          onClick={() => {
            dispatch(addToCart(produce.id));
            dispatch(showHideCart(true));
            }
          }
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;