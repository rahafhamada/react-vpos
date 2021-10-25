import styled from "styled-components";
import { main } from "../../variables";

export const ShopPageWrapper = styled.div`
  margin-top: 120px;

  .product-item-wrapper {
    border: 1px solid #eee;
    padding: 10px;
    text-align: center;

    button {
      all: unset;
      background-color: #ff006e;
      color: #fff;
      font-size: 0.8rem;
      padding: 10px 20px;
      margin-top: 10px;
      border-radius: 20px;
      font-weight: 500;
      cursor: pointer;
    }
  }
`;

export const ShopPageContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 29px;
`;

export const ShopPageProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 10px;
`;

export const ShopPageProductsCart = styled.div`
  height: fit-content;
`;

export const ShopPageProductsCartItem = styled.div`
  font-size: 0.8rem;
  margin-bottom: 7px;
  display: flex;
  align-items: center;

  &:not(:last-of-type) {
    border-bottom: 1px solid #eee;
    padding-bottom: 7px;
  }

  svg {
    color: red;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const ShopPageBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 30px;

  button {
    all: unset;
    border: 1px solid ${main};
    font-size: 0.8rem;
    padding: 7px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: ${main};
      color: #fff;
    }
  }
`;
