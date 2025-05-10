import FiltersContainer from '@/components/FiltersContainer';
import ShoeCatalogue from '@/components/ShoeCatalogue';
import { shoes } from '@/consts/shoes';

import { useFilters } from '@/hooks/useFilters';

import { useStore } from '@nanostores/react';
import { searchStore } from '@/stores/searchStore';

export default function Catalogue() {
  const { filterProducts, setFilters } = useFilters();

  const search = useStore(searchStore);

  const searchFilteredProducts = shoes.filter((shoe) =>
    shoe.name.toLowerCase().includes(search.toLowerCase())
  );

  const filteredProducts = filterProducts(searchFilteredProducts);

  return (
    <section id="catalogue" className="flex flex-col mx-16 mt-8">
      <FiltersContainer changeFilters={setFilters} />
      {filteredProducts.length > 0 ? (
        <ShoeCatalogue shoes={filteredProducts} />
      ) : (
        <p className="text-center text-gray-500 mt-4">
          No se encontraron resultados.
        </p>
      )}
    </section>
  );
}
