import { createContext, useEffect, useState } from "react";

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [itemAmount, setItemAmount] = useState(0);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    const amount = cart.reduce((pv, cv) => {
      return pv + cv.amount;
    }, 0);
    setItemAmount(amount);
  }, [cart]);

  useEffect(() => {
    const finalTotal = cart.reduce((pv, cv) => {
      return pv + cv.price * cv.amount;
    }, 0);
    setTotal(finalTotal);
  });

  const addToCart = (pd, id) => {
    // console.log(`${pd.title} is added`);
    const newItem = { ...pd, amount: 1 };
    //find same cart
    const cartItem = cart?.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };
  const removeCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };
  const clearCart = () => {
    setCart([]);
  };
  const increaseQty = (id) => {
    const CartItem = cart?.find((item) => {
      item.id === id;
    });
    addToCart(CartItem, id);
  };
  console.log(cart);

  const decreaseQty = (id) => {
    const CartItem = cart?.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newItem = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newItem);
    }
    if (CartItem.amount < 2) {
      removeCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        increaseQty,
        removeCart,
        clearCart,
        decreaseQty,
        itemAmount,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
