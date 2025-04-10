import Minus from '@/icons/Minus';
import Plus from '@/icons/Plus';

import { useState, useEffect } from 'react';

export default function Amount() {
  const [amount, setAmount] = useState(0);

  useEffect(() => {
    localStorage.setItem('cantidad', amount);
  }, [amount]);

  const handleIncrement = () => {
    if (amount < 10) {
      setAmount((prev) => prev + 1);
    }
  };

  const handleDecrement = () => {
    if (amount > 0) {
      setAmount((prev) => prev - 1);
    }
  };

  return (
    <div className="flex flex-col gap-6">
      <p className="text-xl text-primary">Cantidad</p>
      <div className="flex gap-2 items-center">
        <button onClick={handleDecrement}>
          <Minus className="bg-white p-2 size-12 rounded-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition cursor-pointer" />
        </button>
        <p className="mx-4 text-2xl font-rubik font-bold">{amount}</p>
        <button onClick={handleIncrement}>
          <Plus className="bg-white p-2 size-12 rounded-lg hover:bg-primary hover:text-white hover:-translate-y-1 transition cursor-pointer" />
        </button>
      </div>
    </div>
  );
}
