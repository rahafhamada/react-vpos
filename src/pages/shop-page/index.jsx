import { useSelector, useDispatch } from "react-redux";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";
import PRODUCTS from "../../dummy-data/products";
import { BsFillTrashFill } from "react-icons/bs";
import {
  addItemToCart,
  clearItemFromCart,
  decreaseItemQty,
} from "../../redux/cart/cart.action";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { CustomContainer } from "../../variables";
import {
  ShopPageWrapper,
  ShopPageProductsGrid,
  ShopPageContent,
  ShopPageProductsCart,
  ShopPageProductsCartItem,
  ShopPageBtnWrapper,
  ShopPageProductsCartItemName,
  ShopPageProductsCartItemQty,
} from "./shop-page-styles";

const ShopPage = ({ setIsOpen }) => {
  const { cartItems } = useSelector(({ cart }) => cart);

  const dispatch = useDispatch();

  return (
    <ShopPageWrapper>
      <Navbar setIsOpen={setIsOpen} isDark />
      <CustomContainer>
        <ShopPageContent>
          <ShopPageProductsGrid>
            {PRODUCTS.map(item => (
              <ProductItem key={item.id} item={item} />
            ))}
          </ShopPageProductsGrid>
          <ShopPageProductsCart>
            <h4 style={{ marginBottom: 15 }}>Cart's Products</h4>
            {!cartItems?.length && <h4>No product</h4>}
            {cartItems?.map((item, idx) => (
              <ShopPageProductsCartItem key={item.id}>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                  }}
                >
                  #{idx + 1}:{" "}
                  <ShopPageProductsCartItemName>
                    {item.name}
                  </ShopPageProductsCartItemName>
                  <ShopPageProductsCartItemQty>
                    <AiOutlinePlus
                      onClick={() => dispatch(addItemToCart(item))}
                    />{" "}
                    <span>{item.quantity}</span>{" "}
                    <AiOutlineMinus
                      onClick={() => {
                        dispatch(decreaseItemQty(item));
                      }}
                    />
                  </ShopPageProductsCartItemQty>{" "}
                  =
                  <b style={{ marginLeft: 10 }}>
                    {" "}
                    {item.price * item.quantity} EUR
                  </b>
                </div>
                <div>
                  <BsFillTrashFill
                    onClick={() => dispatch(clearItemFromCart(item?.id))}
                  />
                </div>
              </ShopPageProductsCartItem>
            ))}
            {cartItems?.length >= 1 ? (
              <h3 style={{ marginTop: 25 }}>
                Total:{" "}
                {cartItems?.reduce(
                  (prev, curr) => prev + curr.price * curr.quantity,
                  0
                )}{" "}
              </h3>
            ) : null}
            <ShopPageBtnWrapper>
              <button>Payment</button>
              <button>Refund</button>
              <button>Reset</button>
              <button>Open Till</button>
            </ShopPageBtnWrapper>
          </ShopPageProductsCart>
        </ShopPageContent>
      </CustomContainer>
    </ShopPageWrapper>
  );
};

export default ShopPage;
