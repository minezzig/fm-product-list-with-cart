import { confirmModalProps } from "../types/types";
import { ConfirmedItem } from "./confirmedItem";

export const ConfirmModal = ({cart, setModalOpen, setCart}: confirmModalProps) => {
    const startNewOrder = () => {
        //close modal
        setModalOpen(false)
        //clear cart
        setCart([])
    }
  return (
    <div className="absolute inset-0 flex items-center justify-center bg-[rgba(0,0,0,.5)]">
      <div className="w-full h-[90%] self-end md:w-auto md:h-auto md:self-auto rounded-lg bg-white p-5">
        <div className="flex flex-col gap-3">
          <div><img src="/assets/images/icon-order-confirmed.svg" alt="confirmed" /></div>
          <div className="font-bold text-4xl">Order Confirmed</div>
          <div className="text-xs text-red">We hope you enjoy your food!</div>
          <div className="h-fit min-w-[300px] rounded-xl bg-rose1 p-5">
            {cart.map(item => <ConfirmedItem item={item} key={item.name}/>)}
          <div className="flex items-center justify-between mt-3">
            <div>Order Total: </div>
            <div className="font-bold text-2xl">
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
