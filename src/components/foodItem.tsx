import { foodItemProps } from "../types/types";

export const FoodItem = ({
  foodItem,
  handleSelect,
  selectedName,
  cart,
  setCart,
}: foodItemProps) => {
  const { name, price, category, image } = foodItem;
  // add selected item to cart
  const addToCart = (name: string) => {
    const newItem = { name, quantity: 1, price};
    setCart((prev) => [...prev, newItem]);
    console.log(cart);
  };
  // increase quanity by 1
  const handleIncrease = (name: string) => {
    const updatedCart = cart.map(item => {
      if(item.name === name){
        return {...item, quantity: item.quantity + 1}
      }
      return item;
    });
    setCart(updatedCart);
  }

  // decrease quanitty by 1
  const handleDecrease = (name: string) => {
    const updatedCart = cart.map(item => {
      if(item.name === name){
        return {...item, quantity: item.quantity - 1}
      }
      return item;
    });
    setCart(updatedCart);
  };

  return (
    <div className="flex flex-1 flex-col">
      <div
        className={`overflow-hidden rounded-xl border-2 ${selectedName === foodItem.name ? "border-red" : "border-transparent"}`}
        onClick={() => handleSelect(foodItem.name)}
      >
        <img
          src={image.mobile}
          alt={name}
          className="md:aspect-square md:object-cover"
        />
      </div>
      <div
        className={`min-w-1/3 flex -translate-y-1/2 cursor-pointer items-center justify-center gap-2 self-center rounded-3xl border border-rose4 bg-rose1 p-3 text-center transition hover:bg-rose2 ${selectedName === foodItem.name ? "bg-red" : "bg-none"}`}
      >
        {selectedName !== foodItem.name ? (
          <div className="flex gap-2" onClick={() => addToCart(name)}>
            <img src="../../assets/images/icon-add-to-cart.svg" />
            Add to Cart
          </div>
        ) : (
          <>
            <div
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white"
              onClick={() => handleDecrease(name)}
            >
              <img src="../../assets/images/icon-decrement-quantity.svg" />
            </div>
            <div
              className="flex h-5 w-5 items-center justify-center rounded-full border border-white"
              onClick={() => handleIncrease(name)}
            >
              <img src="../../assets/images/icon-increment-quantity.svg" />
            </div>
          </>
        )}
      </div>
      <div>
        <div className="text-rose4">{category}</div>
        <div className="font-bold">{name}</div>
        <div className="font-bold text-red">{price}</div>
      </div>
    </div>
  );
};
