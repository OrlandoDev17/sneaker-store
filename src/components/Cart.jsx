import { useId } from 'react';
import { CartIcon, ClearCartIcon, PlusIcon } from '@/icons/icons';

import { useStore } from '@nanostores/react';
import { cartStore, clearCart, addToCart } from '@/stores/cartStore';

export function CartItem({ name, price, images, quantity, addToCart }) {
  return (
    <li className="flex flex-col gap-2 bg-white p-4 rounded-2xl text-primary">
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

      <footer className="flex items-center justify-center w-full">
        <button className="bg-blue-500 w-full py-2 rounded-xl text-white text-xl font-bold cursor-pointer hover:bg-blue-700 hover:-translate-y-1 transition">
          Pagar Ahora
        </button>
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
      } else {
        slotCtn.classList.remove('blur-bg');
      }
    }
  };

  return (
    <>
      <>
        <label
          className="cart-button relative flex items-center justify-center"
          htmlFor={cartCheckboxId}
        >
          <CartIcon className="size-14 border-2 p-2 rounded-full inline-block cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition" />
          <span className="absolute top-0 -right-2 bg-red-500 text-white text-base font-semibold  px-2 rounded-full">
            {cart.length}
          </span>
        </label>

        <input
          type="checkbox"
          id={cartCheckboxId}
          hidden
          onChange={(e) => handleCheckboxChange(e.target.checked)}
        />

        <aside className="cart flex flex-col  absolute h-auto min-h-full w-100 top-25 right-0 z-10 bg-primary text-white">
          <div className="flex items-center flex-col gap-4 justify-center p-8">
            <ul className="flex flex-col gap-4">
              {cart.map((shoe) => (
                <CartItem
                  key={shoe.id}
                  addToCart={() => addToCart(shoe)}
                  {...shoe}
                />
              ))}
            </ul>

            <button
              className="text-primary bg-light rounded-full p-2 cursor-pointer hover:scale-125 transition"
              onClick={clearCart}
            >
              <ClearCartIcon className="size-12" />
            </button>
          </div>
        </aside>
      </>
    </>
  );
}
