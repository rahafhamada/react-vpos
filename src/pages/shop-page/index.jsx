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
  ShopPageBtnWrapper,
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
          <div>
            {cartItems?.length >= 1 && (
              <>
                {" "}
                <div className="table-wrapper">
                  <table id="customers">
                    <thead>
                      <th>ID</th>
                      <th>Name</th>
                      <th>Quantity</th>
                      <th>Price</th>
                      <th>Action</th>
                    </thead>

                    {cartItems?.map((item, idx) => (
                      <tr style={{ height: 50 }}>
                        <td>{idx + 1}</td>
                        <td>{item.name}</td>
                        <td
                          style={{
                            textAlign: "center",
                            fontSize: "1rem",
                          }}
                        >
                          <ShopPageProductsCartItemQty>
                            <AiOutlinePlus
                              onClick={() => dispatch(addItemToCart(item))}
                            />{" "}
                            <span style={{ fontSize: ".8rem" }}>
                              {item.quantity}
                            </span>{" "}
                            <AiOutlineMinus
                              onClick={() => {
                                dispatch(decreaseItemQty(item));
                              }}
                            />
                          </ShopPageProductsCartItemQty>
                        </td>
                        <td>{item.price * item.quantity}</td>

                        <td
                          style={{
                            textAlign: "center",
                            fontSize: "1rem",
                            color: "red",
                            cursor: "pointer",
                          }}
                        >
                          <BsFillTrashFill
                            onClick={() =>
                              dispatch(clearItemFromCart(item?.id))
                            }
                          />
                        </td>
                      </tr>
                    ))}
                  </table>
                </div>
                <ShopPageBtnWrapper>
                  <button>Payment</button>
                  <button>Refund</button>
                  <button>Reset</button>
                  <button>Open Till</button>
                </ShopPageBtnWrapper>{" "}
              </>
            )}

            {cartItems?.length >= 1 ? (
              <h3 style={{ marginTop: 25 }}>
                Total:{" "}
                {cartItems?.reduce(
                  (prev, curr) => prev + curr.price * curr.quantity,
                  0
                )}{" "}
              </h3>
            ) : null}
          </div>
        </ShopPageContent>
      </CustomContainer>
    </ShopPageWrapper>
  );
};

export default ShopPage;
