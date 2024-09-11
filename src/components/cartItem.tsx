import { cartItemProps } from "../types/types";

export const CartItem = ({ item, cart, setCart }: cartItemProps) => {

  const handleRemove = (name: string) => {
    const filteredCart = cart.filter(item => item.name !== name);

    setCart(filteredCart);
  }
  return (
    <li className="list-none flex items-center justify-between">
      <div className="flex flex-col gap-1 w-full">
        <div className="font-bold">{item.name}</div>
        <div className="flex gap-3 mb-3">
          <span className="text-red">{item.quantity}x</span>
          <span className="text-rose3">@ {(item.price).toFixed(2)}</span>
          <span className="text-rose4">${(item.quantity * item.price).toFixed(2)}</span>
        </div>
        <hr/>
      </div>
     
      <div>
        <div className="p-1 border border-rose3 w-fit rounded-full cursor-pointer hover:bg-red hover:text-white transition" onClick={() => handleRemove(item.name)}><img src="/assets/images/icon-remove-item.svg" alt="remove item"/></div>
      </div>
    </li>
  );
};
