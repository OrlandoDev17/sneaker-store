import { useId } from 'react';
import { CartIcon } from '@/icons/icons';

export default function Cart() {
  const cartCheckboxId = useId();

  return (
    <>
      <div className="">
        <label
          className="cart-button flex items-center justify-center"
          htmlFor={cartCheckboxId}
        >
          <CartIcon className="size-14 border-2 p-2 rounded-full inline-block cursor-pointer hover:border-blue-500 hover:text-blue-500 hover:scale-110 transition" />
        </label>
        <input type="checkbox" id={cartCheckboxId} hidden />

        <aside className="cart flex items-center justify-center absolute mt-5 h-full min-h-[90vh] w-100  right-0 z-10 bg-primary text-white"></aside>
      </div>
    </>
  );
}
