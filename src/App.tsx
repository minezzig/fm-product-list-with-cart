import { useEffect, useState } from "react";
import { FoodItems } from "./components/Food/FoodItems";
import { Cart } from "./components/Cart/Cart";
import { foodItemType } from "./types";
import { cartItemType } from "./types";

function App() {
  const [foodItems, setFoodItems] = useState<foodItemType[]>([]);
  const [cart, setCart] = useState<cartItemType[]>([]);

  useEffect(() => {
    async function getData() {
      const response = await fetch("/data.json");
      const data = await response.json();

      setFoodItems(data);
    }
    getData();
  }, []);

  return (
    <div className="m-auto flex max-w-[1248px] flex-col justify-center gap-5 p-5 md:flex-row md:p-20">
      <div>
        <h1 className="mb-3 text-3xl font-bold">Desserts</h1>
        {foodItems.length && (
          <FoodItems foodItems={foodItems} cart={cart} setCart={setCart} />
        )}
      </div>
      <Cart cart={cart} setCart={setCart} />
    </div>
  );
}

export default App;
