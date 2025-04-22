import { useId } from 'react';
import { CartIcon } from '@/icons/icons';

import { useStore } from '@nanostores/react';
import { cartStore } from '@/stores/cartStore';

export default function Cart() {
  const cartCheckboxId = useId();

  const cart = useStore(cartStore);

  return (
    <>
      <div className="">
        <label
          className="cart-button relative flex items-center justify-center"
          htmlFor={cartCheckboxId}
        >
          <CartIcon className="size-14 border-2 p-2 rounded-full inline-block cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition" />
          <span className="absolute top-0 -right-2 bg-red-500 text-white text-base font-semibold  px-2 rounded-full">
            {cart.length}
          </span>
        </label>

        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className="cart flex items-center justify-center absolute mt-5 h-full min-h-[90vh] w-100  right-0 z-10 bg-primary text-white"></aside>
      </div>
    </>
  );
}
