import styled from "styled-components";
import { main } from "../../variables";

export const RegisterPageWrapper = styled.div`
  margin-top: 120px;

  h1 {
    color: ${main};
    text-align: center;
  }

  form {
    width: 600px;
    margin: 0 auto;

    label {
      font-size: 0.8rem;
    }

    input[type="text"],
    input[type="email"],
    input[type="password"] {
      width: 100%;
      padding: 12px 20px;
      margin: 10px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      outline: none;
    }

    input[type="submit"] {
      width: 100%;
      background-color: ${main};
      color: white;
      padding: 14px 20px;
      margin: 20px 0 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
    }

    input[type="submit"]:hover {
      background-color: ${main};
    }

    div {
      margin-top: 20px;
      font-size: 1rem;
    }
  }
`;
