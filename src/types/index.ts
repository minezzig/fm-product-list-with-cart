// a single food item
export interface foodItemType {
  name: string;
  price: number;
  category: string;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
    thumbnail: string;
  };
}
// a single item in cart
export interface cartItemType {
  name: string;
  quantity: number;
  price: number;
  image: {
    desktop: string;
    mobile: string;
    tablet: string;
    thumbnail: string;
  }
}

// props of a single food item
export interface foodItemProps {
  foodItem: foodItemType;
  cart: cartItemType[];
  setCart: React.Dispatch<React.SetStateAction<cartItemType[]>>;
}

// props of a food items array
export interface foodItemsProps {
  foodItems: foodItemType[];
  cart: cartItemType[];
  setCart: React.Dispatch<React.SetStateAction<cartItemType[]>>;
}

// props for cart component
export interface cartProps {
  cart: cartItemType[];
  setCart: React.Dispatch<React.SetStateAction<cartItemType[]>>;
}

export interface cartItemProps {
  item: cartItemType;
  cart: cartItemType[];
  setCart: React.Dispatch<React.SetStateAction<cartItemType[]>>;
}

export interface confirmedItemProps {
  item: cartItemType;
}

export interface confirmModalProps {
  cart: cartItemType[];
  setModalOpen: (status: boolean) => void;
  setCart: React.Dispatch<React.SetStateAction<cartItemType[]>>;
}