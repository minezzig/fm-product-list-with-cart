import { useState } from "react";
import { foodItemsProps } from "../types/types";
import { FoodItem } from "./foodItem";

export const FoodItems = ({ foodItems, cart, setCart }: foodItemsProps) => {
  const [selectedName, setSelectedName] = useState("");

  const handleSelect = (name: string) => {
    setSelectedName(name);
  };
  return (
    <>
      <div className="grid grid-cols-1 gap-3 md:grid-cols-2 lg:grid-cols-3">
        {foodItems.map((foodItem) => (
          <FoodItem
            foodItem={foodItem}
            key={foodItem.name}
            handleSelect={handleSelect}
            selectedName={selectedName}
            cart={cart}
            setCart={setCart}
          />
        ))}
      </div>
    </>
  );
};
