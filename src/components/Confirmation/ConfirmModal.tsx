import { confirmModalProps } from "../../types";
import { ConfirmedItem } from "./ConfirmedItem";

export const ConfirmModal = ({cart, setModalOpen, setCart }: confirmModalProps) => {
  // start a new order by closing modal and emptying shopping cart with []
  const startNewOrder = () => {
    setModalOpen(false);
    setCart([]);
  };
  
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,.5)]">
      <div className="h-[90%] w-full self-end rounded-lg bg-white p-5 md:h-auto md:w-auto md:self-auto">
        <div className="flex flex-col gap-3">
          <div>
            <img
              src="/images/icon-order-confirmed.svg"
              alt="confirmed"
            />
          </div>
          <div className="text-4xl font-bold">Order Confirmed</div>
          <div className="text-xs text-red">We hope you enjoy your food!</div>
          <div className="h-fit min-w-[300px] rounded-xl bg-rose1 p-5">
            {cart.map((item) => (
              <ConfirmedItem item={item} key={item.name} />
            ))}
            <div className="mt-3 flex items-center justify-between">
              <div>Order Total: </div>
              <div className="text-2xl font-bold">
                $
                {cart
                  .reduce((sum, item) => sum + item.quantity * item.price, 0)
                  .toFixed(2)}
              </div>
            </div>
          </div>
          <button
            className="w-full rounded-3xl bg-red p-3 text-white hover:bg-rose5"
            onClick={startNewOrder}
          >
            Start New Order
          </button>
        </div>
      </div>
    </div>
  );
};
