import { PlusIcon } from '@/icons/icons';
import { addToCart, removeFromCart } from '@/stores/cartStore';

import { useState } from 'react';

export function CartItem({ id, name, price, images, quantity }) {
  const [message, setMessage] = useState('');

  const handlePay = () => {
    removeFromCart(id);
    setMessage('Gracias por tu compra!');
    setTimeout(() => {
      setMessage('');
    }, 3000);
  };

  return (
    <>
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
              onClick={() => addToCart({ quantity: +1, id })}
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
        </footer>
      </li>
      <span className="text-xl">{message}</span>
    </>
  );
}
