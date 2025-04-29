import { useId, useEffect } from 'react';
import { CartIcon, ClearCartIcon, XIcon } from '@/icons/icons';
import { CartItem } from './CartItem';

import { cartStore, clearCart, initialCart } from '@/stores/cartStore';
import { useStore } from '@nanostores/react';

export function Cart() {
  useEffect(() => {
    initialCart();
  }, []);

  const cartCheckboxId = useId();
  const cart = useStore(cartStore);

  const handleCheckboxChange = (isChecked) => {
    const slotCtn = document.querySelector('.slot-ctn');
    if (slotCtn) {
      if (isChecked) {
        slotCtn.classList.add('blur-bg');
        document.body.classList.add('overflow-y-hidden');
      } else {
        slotCtn.classList.remove('blur-bg');
        document.body.classList.remove('overflow-y-hidden');
      }
    }
  };

  return (
    <>
      {/* Botón para abrir/cerrar el carrito */}
      <label
        className="cart-button relative flex items-center justify-center"
        htmlFor={cartCheckboxId}
      >
        <CartIcon className="size-14 border-2 p-2 rounded-full inline-block cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition" />
        <span className="absolute top-0 -right-2 bg-red-500 text-white text-base font-semibold px-2 rounded-full">
          {cart.length}
        </span>
      </label>

      <input
        type="checkbox"
        id={cartCheckboxId}
        hidden
        onChange={(e) => handleCheckboxChange(e.target.checked)}
      />

      {/* Contenedor del carrito */}
      <aside className="cart flex flex-col items-center p-4 absolute h-[89vh] w-100 top-25 right-0 z-10 bg-primary text-white">
        <div className="flex items-center gap-2">
          <label htmlFor={cartCheckboxId}>
            <XIcon className="stroke-2 size-8 cursor-pointer hover:text-red-500 hover:scale-125 transition" />
          </label>
          <h2 className="text-2xl font-semibold font-rubik tracking-wide">
            Carrito de Compras
          </h2>
          <CartIcon className="size-8 stroke-2" />
        </div>

        <div className="flex flex-col h-full">
          {/* Contenedor con desplazamiento para los productos */}
          <div className="flex-1 overflow-y-auto p-8">
            <ul className="flex flex-col gap-4">
              {cart.map((shoe) => (
                <CartItem key={shoe.id} {...shoe} />
              ))}
            </ul>
          </div>

          {/* Botón "Limpiar carrito" */}
          <div className="flex items-center justify-center py-4 bg-primary-dark">
            <button
              className="flex items-center justify-center border-2 border-white rounded-full p-2 cursor-pointer hover:bg-red-500 hover:scale-110 transition"
              onClick={clearCart}
            >
              <ClearCartIcon className="size-8 mx-auto" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
