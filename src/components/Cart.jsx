import { useId } from 'react';
import { CartIcon, ClearCartIcon, PlusIcon } from '@/icons/icons';
import { useStore } from '@nanostores/react';
import {
  cartStore,
  clearCart,
  addToCart,
  RemoveFromCart,
} from '@/stores/cartStore';
import { useState } from 'react';

export function CartItem({
  id,
  name,
  price,
  images,
  quantity,
  addToCart,
  removeFromCart,
}) {
  const [showMessage, setShowMessage] = useState(false);

  const handlePay = () => {
    removeFromCart(id); // Remueve el producto
    setShowMessage(true); // Muestra el mensaje
    setTimeout(() => setShowMessage(false), 3000); // Oculta el mensaje después de 3 segundos
  };

  return (
    <li className="relative flex flex-col gap-2 bg-white p-4 rounded-2xl text-primary">
      <img className="bg-light rounded-2xl" src={images[0]} alt={name} />

      <div className="flex flex-col gap-2">
        <h3 className="text-lg font-semibold text-balance">{name}</h3>
      </div>

      <div className="flex items-center justify-between">
        <strong className="font-rubik text-xl tracking-wider">
          ${price}.00
        </strong>
        <span className="text-primary text-lg flex items-center gap-4 font-semibold">
          Cantidad: {quantity}
          <button
            className="bg-light p-1 rounded-xl cursor-pointer hover:bg-primary hover:text-white hover:scale-110 transition"
            onClick={addToCart}
          >
            <PlusIcon className="size-8" />
          </button>
        </span>
      </div>

      <footer className="flex flex-col items-center justify-center w-full gap-2">
        <button
          onClick={handlePay}
          className="bg-blue-500 w-full py-2 rounded-xl text-white text-xl font-bold cursor-pointer hover:bg-blue-700 hover:-translate-y-1 transition"
        >
          Pagar Ahora
        </button>
        {showMessage && (
          <span className="absolute top-2 left-1/2 transform -translate-x-1/2 bg-green-500 text-white p-2 rounded-xl text-sm font-semibold">
            ¡Pago realizado con éxito!
          </span>
        )}
      </footer>
    </li>
  );
}

export default function Cart() {
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
      <aside className="cart flex flex-col absolute h-[89vh] w-100 top-25 right-0 z-10 bg-primary text-white">
        <div className="flex flex-col h-full">
          {/* Contenedor con desplazamiento para los productos */}
          <div className="flex-1 overflow-y-auto p-8">
            <ul className="flex flex-col gap-4">
              {cart.map((shoe) => (
                <CartItem
                  key={shoe.id}
                  addToCart={() => addToCart(shoe)}
                  removeFromCart={(id) => RemoveFromCart({ id })} // Pasa el id del producto a RemoveFromCart
                  {...shoe}
                />
              ))}
            </ul>
          </div>

          {/* Botón "Limpiar carrito" */}
          <div className="flex items-center justify-center p-4 bg-primary-dark">
            <button
              className="flex items-center justify-center text-primary bg-light rounded-full p-2 cursor-pointer hover:scale-125 transition"
              onClick={clearCart}
            >
              <ClearCartIcon className="size-12 mx-auto" />
            </button>
          </div>
        </div>
      </aside>
    </>
  );
}
