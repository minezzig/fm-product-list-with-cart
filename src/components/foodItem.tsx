import { foodItemProps } from "../types/types";

export const FoodItem = ({ foodItem, cart, setCart }: foodItemProps) => {
  const { name, price, category, image } = foodItem;
  // add selected item to cart
  const addToCart = (name: string) => {
    const newItem = { name, quantity: 1, price, image: image };
    setCart((prev) => [...prev, newItem]);
    console.log(cart);
  };
  // increase quanity by 1
  const handleIncrease = (name: string) => {
    const updatedCart = cart.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  // decrease quanitty by 1 #CAAFA7
  const handleDecrease = (name: string) => {
    const found = cart.find((item) => item.name === name);
    if (found?.quantity === 1) return;
    const updatedCart = cart.map((item) => {
      if (item.name === name) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="flex flex-1 flex-col ">
      <div
        className={`overflow-hidden rounded-xl border-2 ${cart.find((item) => item.name === foodItem.name) ? "border-red" : "border-transparent"}`}
      >
        <picture>
          <source srcSet={image.desktop} media="(min-width: 1024px)" />
          <source srcSet={image.tablet} media="(min-width: 768px)" />
          <img
            src={image.mobile}
            alt={name}
            className="md:aspect-square md:object-cover"
          />
        </picture>
      </div>
      {!cart.find((item) => item.name === foodItem.name) ? (
        <div
          className="min-w-1/3 flex -translate-y-1/2 cursor-pointer items-center justify-center gap-2 self-center rounded-3xl border border-rose4 bg-rose1 p-3 transition hover:bg-rose2"
          style={{}}
          onClick={() => addToCart(name)}
        >
          <img src="../../assets/images/icon-add-to-cart.svg" />
          Add to Cart
        </div>
      ) : (
        <div className="min-w-1/3 flex -translate-y-1/2 cursor-pointer items-center justify-center gap-3 self-center rounded-3xl border border-rose4 bg-red p-3">
          <div
            className="flex h-5 w-5 items-center justify-center rounded-full border border-rose1 transition hover:bg-rose1"
            onClick={() => handleDecrease(name)}
          >
            <img
              src="/assets/images/icon-decrement-quantity.svg"
              alt="decrease"
            />
          </div>
          <div className="text-white">
            {cart.find((item) => item.name === name)?.quantity}
          </div>
          <div
            className="flex h-5 w-5 items-center justify-center rounded-full border border-rose1 transition hover:bg-rose1"
            onClick={() => handleIncrease(name)}
          >
            <img
              src="/assets/images/icon-increment-quantity.svg"
              alt="increase"
            />
          </div>
        </div>
      )}

      <div>
        <div className="text-rose4">{category}</div>
        <div className="font-bold">{name}</div>
        <div className="font-bold text-red">${price.toFixed(2)}</div>
      </div>
    </div>
  );
};
