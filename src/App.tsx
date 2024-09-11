import { useEffect, useState } from "react";
import { FoodItems } from "./components/foodItems";
import { Cart } from "./components/cart";
import { foodItemType } from "./types/types";
import { cartItemType } from "./types/types";

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
    <div className="m-auto flex max-w-[1248px] flex-col md:flex-row p-5 md:p-20 justify-center gap-5">
      <div>
        <h1 className="text-3xl font-bold">Desserts</h1>
        {foodItems.length && <FoodItems foodItems={foodItems} cart={cart} setCart={setCart} />}
      </div>
      <Cart cart={cart} setCart={setCart}/>
    </div>
  );
}

export default App;
