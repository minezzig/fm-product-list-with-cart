import { cartItemProps } from "../types/types";

export const CartItem = ({ item, cart, setCart }: cartItemProps) => {

  const handleRemove = (name: string) => {
    const filteredCart = cart.filter(item => item.name !== name);

    setCart(filteredCart);
  }
  return (
    <li key={item.name} className="list-none flex items-center justify-between gap-3 my-5">
      <div>
        <div className="font-bold">{item.name}</div>
        <div className="flex gap-3">
          <span className="text-red">{item.quantity}x</span>
          <span className="text-rose3">@ {(item.price).toFixed(2)}</span>
          <span className="text-rose4">${(item.quantity * item.price).toFixed(2)}</span>
        </div>
        <hr/>
      </div>
      <div>
        <div className="p-1 border border-rose3 w-fit rounded-full" onClick={() => handleRemove(item.name)}><img src="/assets/images/icon-remove-item.svg" alt="remove item"/></div>
      </div>
    </li>
  );
};
