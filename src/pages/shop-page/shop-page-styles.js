import styled from "styled-components";
import { main } from "../../variables";

export const ShopPageWrapper = styled.div`
  margin-bottom: 100px;

  .product-item-wrapper {
    border: 1px solid #eee;
    padding: 10px;
    text-align: center;
    cursor: pointer;

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
  grid-template-columns: 3fr 2fr;
  gap: 29px;
`;

export const ShopPageProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 10px;
  max-height: 450px;
  overflow-y: auto;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${main};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const ShopPageProductsCart = styled.div`
  max-height: 450px;
  overflow-y: auto;
  height: fit-content;

  /* width */
  ::-webkit-scrollbar {
    width: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${main};
    border-radius: 10px;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #b30000;
  }
`;

export const ShopPageProductsCartItem = styled.div`
  font-size: 0.8rem;
  margin-bottom: 7px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  &:not(:last-of-type) {
    border: 1px solid #eee;
    padding: 10px;
  }

  svg {
    color: red;
    font-size: 1.2rem;
    cursor: pointer;
    margin-left: 10px;
  }
`;

export const ShopPageProductsCartItemName = styled.div`
  font-weight: 600;
  margin: 0 10px;
`;

export const ShopPageProductsCartItemQty = styled.div`
  display: flex;
  align-items: center;
  margin: 0 10px;

  svg {
    color: #000;
    margin: 0;
    font-size: 0.9rem;
    background-color: #ebebeb;
    width: 20px;
    height: 20px;
    padding: 4px;
    cursor: pointer;
    transition: 0.3s ease-in-out;

    &:hover {
      background-color: #ff006e;
      color: #fff;
    }
  }

  span {
    font-size: 1rem;
    text-align: center;
    margin: 0 10px;
  }
`;

export const ShopPageBtnWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;

  button {
    all: unset;
    border: 1px solid ${main};
    font-size: 0.8rem;
    padding: 7px 10px;
    cursor: pointer;
    border-radius: 5px;
    transition: 0.3s ease-in-out;
    margin-right: 15px;

    &:hover {
      background-color: ${main};
      color: #fff;
    }
  }
`;
