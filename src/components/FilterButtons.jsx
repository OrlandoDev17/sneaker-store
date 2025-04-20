const BUTTON_LABELS = ['Todos', 'Nike', 'Adidas', 'Jordan'];

export default function FilterButtons({ onChange }) {
  const handleMaker = (maker) => {
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
            className=" bg-light px-4 py-2 rounded-full text-lg text-primary hover:bg-primary hover:text-white transition cursor-pointer active:bg-primary"
          >
            {label}
          </button>
        ))}
      </aside>
    </>
  );
}
