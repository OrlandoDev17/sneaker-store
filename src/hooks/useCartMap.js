import { useState, useEffect } from 'react';

import { useStore } from '@nanostores/react';
import { cartStore, addToCart, removeFromCart } from '@/stores/cartStore';

export function useCartMap(shoes) {
  const [inCartMap, setInCartMap] = useState({});
  const cart = useStore(cartStore);

  useEffect(() => {
    const newInCartMap = {};
    shoes.forEach((shoe) => {
      newInCartMap[shoe.id] = cart.some((item) => item.id === shoe.id);
    });
    setInCartMap(newInCartMap);
  }, [cart]);

  const handleCartAction = (e, shoe) => {
    e.preventDefault();
    if (inCartMap[shoe.id]) {
      removeFromCart(shoe.id);
    } else {
      addToCart({ ...shoe, quantity: 1 }); // Se añade con cantidad 1
    }

    setInCartMap((prev) => ({
      ...prev,
      [shoe.id]: !prev[shoe.id],
    }));
  };

  return { inCartMap, handleCartAction };
}
