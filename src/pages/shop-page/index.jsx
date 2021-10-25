import { useSelector } from "react-redux";
import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";
import PRODUCTS from "../../dummy-data/products";
import { BsFillTrashFill } from "react-icons/bs";
import { CustomContainer } from "../../variables";
import {
  ShopPageWrapper,
  ShopPageProductsGrid,
  ShopPageContent,
  ShopPageProductsCart,
  ShopPageProductsCartItem,
  ShopPageBtnWrapper,
} from "./shop-page-styles";

const ShopPage = ({ setIsOpen }) => {
  const { cartItems } = useSelector(({ cart }) => cart);
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
            {cartItems?.map(({ id, name, price, quantity }) => (
              <ShopPageProductsCartItem key={id}>
                {name}: {quantity} X {price} = <b> {price * quantity} EUR</b>{" "}
                <BsFillTrashFill />
              </ShopPageProductsCartItem>
            ))}
            {cartItems?.length >= 1 ? (
              <h3 style={{ marginTop: 25 }}>
                Total:{" "}
                {cartItems?.reduce(
                  (prev, curr) => prev + curr.price * curr.quantity,
                  0
                )}{" "}
                EUR
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
