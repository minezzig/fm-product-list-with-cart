import { cartItemProps } from "../types/types";

export const CartItem = ({ item }: cartItemProps) => {
  return (
    <li key={item.name} className="list-none flex flex-col gap-3 my-5">
      <div className="font-bold">{item.name}</div>
      <div className="flex gap-3">
        <span className="text-red">{item.quantity}x</span>
        <span className="text-rose3">@ {(item.price).toFixed(2)}</span>
        <span className="text-rose4">${(item.quantity * item.price).toFixed(2)}</span>
      </div>
      <hr/>
    </li>
  );
};
