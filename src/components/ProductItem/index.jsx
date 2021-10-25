import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const ProductItem = ({ item }) => {
  const { name, image } = item;
  const dispatch = useDispatch();

  return (
    <div className="product-item-wrapper">
      <img src={image} alt="" style={{ width: "100%", height: 150 }} />
      <h5>{name}</h5>
      <button
        onClick={() => {
          dispatch(addItemToCart(item));
        }}
      >
        Add to cart
      </button>
    </div>
  );
};

export default ProductItem;
