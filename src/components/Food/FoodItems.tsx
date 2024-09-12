import { foodItemsProps } from "../../types";
import { FoodItem } from "../Food";

export const FoodItems = ({ foodItems, cart, setCart }: foodItemsProps) => {
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((foodItem) => (
          <FoodItem
            foodItem={foodItem}
            key={foodItem.name}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};
