import { atom } from 'nanostores';

// Estado inicial del carrito
export const cartStore = atom([]);

// Accion para agregar un producto al carrito
export const addToCart = (shoe) => {
  // Obtener el estado actual del carrito
  const currentCart = cartStore.get();

  // Buscar si el producto ya existe en el carrito
  const productInCartIndex = currentCart.findIndex(
    (item) => item.id === shoe.id
  );

  if (productInCartIndex >= 0) {
    // Si el producto ya esta en el carrito, aumentar su cantidad
    const newCart = [...currentCart]; // Clonar el carrito actual
    newCart[productInCartIndex].quantity += 1;

    // Actualizar el estado del carrito
    cartStore.set(newCart);
  } else {
    // Si el producto no esta en el carrito, agregarlo con cantidad 1
    cartStore.set([
      ...currentCart,
      {
        ...shoe,
        quantity: 1,
      },
    ]);
  }
};

// Accion para remover un producto del carrito
export const RemoveFromCart = (shoe) => {
  cartStore.set(cartStore.get().filter((item) => item.id !== shoe.id));
};

// Accion para limpiar el carrito
export const clearCart = () => {
  cartStore.set([]);
};
