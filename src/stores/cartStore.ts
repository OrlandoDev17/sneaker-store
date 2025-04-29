import { atom } from 'nanostores';

export type CartItem = {
  id: string;
  name: string;
  price: number;
  quantity: number;
};

export const cartStore = atom<CartItem[]>([]);

// funcion para cargar el estado inicial del cliente
export function initialCart() {
  if (typeof window !== 'undefined') {
    const storedCart = localStorage.getItem('cart');
    const initialCart = storedCart ? JSON.parse(storedCart) : [];
    cartStore.set(initialCart);
  }
}

// Funciones para manejar el carrito

// Añadir
export function addToCart(item: CartItem) {
  const currentCart = cartStore.get();
  const existingItemIndex = currentCart.findIndex((i: any) => i.id === item.id);

  let newCart: CartItem[];
  if (existingItemIndex >= 0) {
    // Si ya existe, aumentamos la cantidad con la cantidad seleccionada
    newCart = [...currentCart];
    newCart[existingItemIndex] = {
      ...newCart[existingItemIndex],
      quantity: newCart[existingItemIndex].quantity + item.quantity,
    };
  } else {
    // Si no existe, lo añadimos con la cantidad seleccionada
    newCart = [...currentCart, item];
  }

  // Actualizamos el estado y guardamos en localStorage
  cartStore.set(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

// Remover
export function removeFromCart(itemId: string) {
  const currentCart = cartStore.get();
  const newCart = currentCart.filter((item: any) => item.id !== itemId);

  // Actualizamos el estado y guardamos en localStorage
  cartStore.set(newCart);
  localStorage.setItem('cart', JSON.stringify(newCart));
}

// Limpiar
export function clearCart() {
  cartStore.set([]);
  localStorage.removeItem('cart');
}
