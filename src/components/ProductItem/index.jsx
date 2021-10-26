import { useDispatch } from "react-redux";
import { addItemToCart } from "../../redux/cart/cart.action";

const ProductItem = ({ item }) => {
  const { name, price, image } = item;
  const dispatch = useDispatch();

  return (
    <div
      className="product-item-wrapper"
      onClick={() => {
        dispatch(addItemToCart(item));
      }}
    >
      <img src={image} alt="" style={{ width: "100%", height: 150 }} />
      <h5>{name}</h5>
      <h5 style={{ marginTop: 10 }}>{price} EUR</h5>
    </div>
  );
};

export default ProductItem;
