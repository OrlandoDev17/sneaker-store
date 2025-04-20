import { useState } from 'react';

const BUTTON_LABELS = ['Todos', 'Nike', 'Adidas', 'Jordan'];

export default function FilterButtons({ onChange }) {
  const [selectedMaker, setSelectedMaker] = useState('Todos');

  const handleMaker = (maker) => {
    setSelectedMaker(maker);
    onChange((prevState) => ({
      ...prevState,
      maker: maker,
    }));
  };

  return (
    <>
      <aside className="flex gap-4">
        {BUTTON_LABELS.map((label) => (
          <button
            key={label}
            onClick={() => handleMaker(label)}
            value={label}
            className={`bg-light px-4 py-2 rounded-full text-lg text-primary hover:bg-primary hover:text-white hover:-translate-y-1 transition cursor-pointer ${
              selectedMaker === label
                ? 'bg-primary text-white -translate-y-1'
                : ''
            }`}
          >
            {label}
          </button>
        ))}
      </aside>
    </>
  );
}
