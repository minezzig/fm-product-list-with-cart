import { confirmedItemProps } from "../types/types";

export const ConfirmedItem = ({ item }: confirmedItemProps) => {
  return (
    <li className="flex list-none items-center gap-5 w-full border-b py-5 border-rose2">
      <img src={item.image.thumbnail} className="rounded-lg"/>
      <div className="flex flex-col gap-3">
        <div className="font-bold">{item.name}</div>
        <div className="flex gap-5">
          <div className="text-red">{item.quantity}x</div>
          <div className="text-rose3">@ {item.price.toFixed(2)}</div>
        </div>
      </div>
      <div className="text-rose4 ml-auto">
        ${(item.quantity * item.price).toFixed(2)}
      </div>
      <hr/>
    </li>
  );
};
