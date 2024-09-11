import { cartItemType, cartProps } from "../types/types";
import { CartItem } from "./cartItem";

export const Cart = ({ cart }: cartProps) => {
  return (
    <div className="h-fit min-w-[300px] rounded-xl bg-white p-5">
      <h2 className="text-xl font-bold text-red mb-3">Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})</h2>
      {cart.length ? (
        <div>
            <div>{cart.map((item: cartItemType) => <CartItem item={item}/>)}</div>
            <div className="flex items-center justify-between">
                <div>Order Total: </div>
                <div className="font-bold">${(cart.reduce((sum, item) => sum + (item.quantity * item.price), 0)).toFixed(2)}</div></div>
            </div>
      ) : (
        <div className="flex flex-col items-center justify-center">
          <img
            src="../../assets/images/illustration-empty-cart.svg"
            alt="cart"
          />
          <p className="text-red">Your added items will appear here.</p>
        </div>
      )}
    </div>
  );
};
