import { useState, useEffect } from 'react';
import { SHOES_INFO } from '@/consts/shoes';
import { useStore } from '@nanostores/react';
import { cartStore, addToCart } from '@/stores/cartStore';

export default function ShoesView() {
  const cart = useStore(cartStore);
  const [currentIndex, setCurrentIndex] = useState(0); // Estado para el índice actual

  const handleCart = () => {
    const selectedShoe = SHOES_INFO[currentIndex]; // Obtener el zapato actual

    // Depuración: Mostrar el zapato seleccionado
    console.log('Producto seleccionado:', selectedShoe);

    const existingItem = cart.find((item) => item.id === selectedShoe.id);

    if (existingItem) {
      // Si ya existe en el carrito, aumentar la cantidad
      addToCart({ ...selectedShoe, quantity: existingItem.quantity + 1 });
    } else {
      // Si no existe, agregarlo con cantidad 1
      addToCart({ ...selectedShoe, quantity: 1 });
    }

    // Depuración: Mostrar el estado del carrito
    console.log('Estado del carrito:', cart);
  };

  useEffect(() => {
    const slides = document.querySelectorAll('#slider-container .slide');
    const buttons = document.querySelectorAll('#slider-buttons .slider-button');

    // Función para mostrar un slide específico
    function showSlide(index) {
      slides.forEach((slide, i) => {
        slide.classList.toggle('active', i === index);
      });
      buttons.forEach((button, i) => {
        button.classList.toggle('active', i === index);
      });
    }

    // Función para avanzar al siguiente slide
    function nextSlide() {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length); // Actualizar el índice
    }

    // Cambiar automáticamente cada 3 segundos
    const interval = setInterval(nextSlide, 3000);

    // Eventos para los botones
    buttons.forEach((button, index) => {
      button.addEventListener('click', () => {
        setCurrentIndex(index); // Actualizar el índice
      });
    });

    // Cleanup para evitar fugas de memoria
    return () => {
      clearInterval(interval);
      buttons.forEach((button) => {
        button.replaceWith(button.cloneNode(true)); // Eliminar event listeners
      });
    };
  }, []);

  return (
    <section
      id="news"
      className="flex flex-col items-center justify-center w-full mask-fade-top-bottom bg-gradient-to-b from-blue-100 via-blue-orange-100 to-orange-200"
    >
      <div
        id="slider-container"
        className="flex items-center justify-center relative w-full h-150 md:h-175 overflow-hidden"
      >
        {SHOES_INFO.map((shoe, index) => (
          <article
            key={shoe.id}
            className={`slide flex flex-col md:flex-row items-center justify-center absolute inset-0 opacity-0 translate-x-[100%] transition duration-500 active:opacity-100 active:translate-x-0 ${
              index === currentIndex ? 'active' : ''
            }`}
            data-index={index}
          >
            <picture className="min-w-10 md:min-w-200">
              <img src={shoe.images[0]} alt={shoe.name} loading="lazy" />
            </picture>
            <div className="flex flex-col gap-y-4 max-w-140">
              <h2 className="text-3xl text-center md:text-start md:text-5xl font-rubik font-bold uppercase text-balance">
                {shoe.name}
              </h2>
              <p className="text-lg md:text-xl text-primary/60 text-center md:text-start text-balance">
                {shoe.description}
              </p>
              <div className="flex justify-center md:justify-start gap-x-3 md:gap-x-6">
                <h3 className="text-3xl md:text-5xl text-orange-500 font-rubik font-black">
                  $ {shoe.price}.00
                </h3>
                <button
                  onClick={handleCart}
                  className="add bg-orange-500 px-4 py-2 rounded-xl text-xl text-white font-semibold hover:bg-orange-700 hover:scale-110 transition cursor-pointer"
                >
                  Añadir al Carrito
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>

      <div id="slider-buttons" className="flex justify-center gap-x-2 pb-16">
        {SHOES_INFO.map((_, index) => (
          <button
            key={index}
            className={`slider-button size-4 bg-black/50 cursor-pointer active:bg-blue-500 rounded-full ${
              index === currentIndex ? 'active' : ''
            }`}
            data-index={index}
            aria-label={`ir al slide ${index}`}
          />
        ))}
      </div>
    </section>
  );
}
