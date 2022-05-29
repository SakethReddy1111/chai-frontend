import { Item } from "../item/item";
import { Wrapper } from "./cartCss";
import { useNavigate } from "react-router-dom";

export const Cart = ({ cart, total }) => {
  const navigate = useNavigate(0);
  return (
    <Wrapper>
      <div className="header">
        <h2>Cart</h2>
        <p>
          Total Payable : <span>$ {total}</span>
        </p>
        <button onClick={() => navigate("/checkout")}>
          Procced To Checkout
        </button>
      </div>

      {cart.map((el, i) => {
        //mapping all products in cart
        return <Item product={el} key={i} />;
      })}
    </Wrapper>
  );
};
