import { cartItemProps } from "../../types";

export const CartItem = ({ item, cart, setCart }: cartItemProps) => {
  // delete an item from the shopping cart by filtering list
  const handleRemove = (name: string) => {
    const filteredCart = cart.filter((item) => item.name !== name);
    setCart(filteredCart);
  };
  
  return (
    <li className="flex list-none items-center justify-between">
      <div className="flex w-full flex-col gap-1">
        <div className="font-bold">{item.name}</div>
        <div className="mb-3 flex gap-3">
          <span className="text-red">{item.quantity}x</span>
          <span className="text-rose3">@ {item.price.toFixed(2)}</span>
          <span className="text-rose4">
            ${(item.quantity * item.price).toFixed(2)}
          </span>
        </div>
        <hr />
      </div>

      <div>
        <div
          className="w-fit cursor-pointer rounded-full border border-rose3 p-1 transition hover:bg-red hover:text-white"
          onClick={() => handleRemove(item.name)}
        >
          <img src="/images/icon-remove-item.svg" alt="remove item" />
        </div>
      </div>
    </li>
  );
};
