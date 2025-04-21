import { createContext, useState } from 'react';

export const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const addToCart = (shoe) => {
    const productInCartIndex = cart.findIndex((item) => item.id === shoe.id);

    if (productInCartIndex >= 0) {
      const newCart = structuredClone(cart);
      newCart[productInCartIndex].quantity += 1;
      setCart(newCart);
    }

    setCart((prevState) => [
      ...prevState,
      {
        ...shoe,
        quantity: 1,
      },
    ]);
  };

  const clearCart = () => {
    setCart([]);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
