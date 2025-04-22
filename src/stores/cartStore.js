import { atom } from 'nanostores';

// Estado inicial del carrito
export const cartStore = atom([]);

// Accion para agregar un producto al carrito
export const addToCart = (shoe) => {
  cartStore.set([...cartStore.get(), shoe]);
};

// Accion para remover un producto del carrito
export const RemoveFromCart = (shoe) => {
  cartStore.set(cartStore.get().filter((item) => item.id !== shoe.id));
};

// Accion para limpiar el carrito
export const clearCart = () => {
  cartStore.set;
};
