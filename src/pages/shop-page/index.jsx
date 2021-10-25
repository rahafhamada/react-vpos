import Navbar from "../../components/Navbar";
import ProductItem from "../../components/ProductItem";
import PRODUCTS from "../../dummy-data/products";
import { CustomContainer } from "../../variables";
import { ShopPageWrapper } from "./shop-page-styles";

// TODO Tell RAHAF to edit this line
const styles = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
  gap: 29,
};

const ShopPage = ({ setIsOpen }) => {
  return (
    <ShopPageWrapper>
      <Navbar setIsOpen={setIsOpen} isDark />
      <CustomContainer>
        <div style={styles}>
          {PRODUCTS.map(item => (
            <ProductItem key={item.id} item={item} />
          ))}
        </div>
      </CustomContainer>
    </ShopPageWrapper>
  );
};

export default ShopPage;
