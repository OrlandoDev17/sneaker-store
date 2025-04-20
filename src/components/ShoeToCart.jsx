import { useState } from 'react';
import Minus from '@/icons/Minus';
import Plus from '@/icons/Plus';

const SIZES = ['38', '40', '40.5', '41', '42', '42.5', '44', '44.5'];

export default function ShoeToCart({ shoe }) {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    if (count < 10) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 0) {
      setCount(count - 1);
    }
  };

  return (
    <aside class="flex flex-col gap-4 p-4">
      <h4 class="text-primary/80 xl:text-lg 2xl:text-xl">{shoe.maker}</h4>
      <h2 class="font-rubik text-3xl max-w-150 font-semibold">{shoe.name}</h2>
      <h3 class="text-2xl font-rubik font-bold tracking-widest">
        ${shoe.price}.00
      </h3>
      <div class="flex flex-col gap-4">
        <p class="text-xl text-primary">Lista de Tallas</p>
        <div class="flex gap-2" id="tallas">
          {SIZES.map((size) => (
            <button
              data-size={size}
              class="bg-white size-8 xl:size-10 2xl:size-14 text-sm xl:text-lg 2xl:text-xl rounded-xl cursor-pointer focus:bg-primary focus:text-white focus:-translate-y-1
          hover:bg-primary hover:text-white hover:-translate-y-1 transition"
            >
              {size}
            </button>
          ))}
        </div>
        <div className="flex flex-col gap-y-4">
          <h3 className="text-xl text-primary">Cantidad de Productos</h3>
          <div className="flex items-center gap-x-6">
            <button
              className="bg-white p-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-1 transition"
              onClick={handleDecrement}
            >
              <Minus className="size-8" />
            </button>
            <span className="text-3xl font-rubik font-semibold">{count}</span>
            <button
              className="bg-white p-2 rounded-xl cursor-pointer hover:bg-primary hover:text-white hover:-translate-y-1 transition"
              onClick={handleIncrement}
            >
              <Plus className="size-8" />
            </button>
          </div>
        </div>
        <div className="w-full flex items-center justify-center mt-4">
          <button className="bg-blue-500 text-white w-full py-4 rounded-xl text-xl font-bold cursor-pointer hover:bg-blue-700 hover:-translate-y-1 transition">
            Agregar al carrito
          </button>
        </div>
      </div>
    </aside>
  );
}
