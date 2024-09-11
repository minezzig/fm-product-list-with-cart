import { cartItemType, cartProps } from "../types/types";
import { CartItem } from "./cartItem";

export const Cart = ({ cart, setCart }: cartProps) => {
  return (
    <div className="h-fit min-w-[300px] rounded-xl bg-white p-5">
      <h2 className="mb-3 text-2xl font-bold text-red">
        Your Cart ({cart.reduce((sum, item) => sum + item.quantity, 0)})
      </h2>
      {cart.length ? (
        <div className="flex flex-col gap-5">
          <div className="flex flex-col gap-7">
            {cart.map((item: cartItemType) => (
              <CartItem item={item} cart={cart} setCart={setCart} key={item.name}/>
            ))}
          </div>
          <div className="flex items-center justify-between">
            <div>Order Total: </div>
            <div className="font-bold">
              $
              {cart
                .reduce((sum, item) => sum + item.quantity * item.price, 0)
                .toFixed(2)}
            </div>
          </div>
          <div className="flex items-center justify-center rounded-lg bg-rose1 p-3 text-sm">
            <img
              src="../../assets/images/icon-carbon-neutral.svg"
              alt="carbon-neutral"
              className="mr-3 inline"
            />
            <div className="text-xs">This is a<span className="font-bold">&nbsp; carbon-neutral&nbsp; </span>delivery</div>
          </div>
          <button className="w-full rounded-3xl bg-red p-3 text-white hover:bg-rose5">
            Confirm Order
          </button>
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
