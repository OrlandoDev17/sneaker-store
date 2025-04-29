import { useState, useEffect } from 'react';

import { StarIcon, AddToCartIcon, RemoveFromCartIcon } from '@/icons/icons';

import { useStore } from '@nanostores/react';
import { cartStore, addToCart, removeFromCart } from '@/stores/cartStore';

export default function ShoeCatalogue({ shoes }) {
  const [inCartMap, setInCartMap] = useState({});
  const cart = useStore(cartStore);

  useEffect(() => {
    const newInCartMap = {};
    shoes.forEach((shoe) => {
      newInCartMap[shoe.id] = cart.some((item) => item.id === shoe.id);
    });
    setInCartMap(newInCartMap);
  }, [cart]);

  const handleCartAction = (e, shoe) => {
    e.preventDefault();
    if (inCartMap[shoe.id]) {
      removeFromCart(shoe.id);
    } else {
      addToCart({ ...shoe, quantity: 1 }); // Se añade con cantidad 1
    }

    setInCartMap((prev) => ({
      ...prev,
      [shoe.id]: !prev[shoe.id],
    }));
  };

  return (
    <div className="grid xl:grid-cols-3 2xl:grid-cols-4 my-12 gap-4 md:gap-8">
      {shoes.map((shoe) => {
        return (
          <article
            key={shoe.id}
            className=" bg-light justify-center items-center p-6 rounded-2xl hover:-translate-y-4 hover:bg-primary group transition cursor-pointer"
          >
            <a className="flex flex-col gap-y-6" href={`/shoes/${shoe.id}`}>
              <picture className="relative top-0 bg-white p-4 rounded-xl">
                <span className="flex items-center gap-2 font-semibold text-base bg-light p-2 rounded-xl absolute">
                  {shoe.rating}
                  <StarIcon className="text-yellow-400" />
                </span>
                <img
                  className="h-64 object-contain"
                  src={shoe.images[0]}
                  alt={`Imagen del zapato ${shoe.name}`}
                  transitionname={`shoe-image-${shoe.id}`}
                />
              </picture>
              <div className="flex flex-col gap-2">
                <div className="flex justify-between">
                  <h2 className="font-semibold w-62 md:w-64 group-hover:text-white transition">
                    {shoe.name}
                  </h2>
                  <button
                    onClick={(event) => handleCartAction(event, shoe)}
                    className={`add-to-cart relative inline-flex rounded-full items-center justify-center bg-white size-14 p-3 cursor-pointer hover:scale-125 transition ${
                      inCartMap[shoe.id] ? 'added' : ''
                    }`}
                  >
                    {inCartMap[shoe.id] ? (
                      <RemoveFromCartIcon className="size-10 text-red-500" />
                    ) : (
                      <AddToCartIcon className="size-10 text-green-500" />
                    )}
                  </button>
                </div>
                <div className="flex justify-between">
                  <p className="text-lg font-rubik text-primary/60 group-hover:text-white transition">
                    {shoe.maker}
                  </p>
                  <p className="text-xl tracking-widest font-rubik font-bold group-hover:text-white transition">
                    ${shoe.price}.00
                  </p>
                </div>
              </div>
            </a>
          </article>
        );
      })}
    </div>
  );
}
