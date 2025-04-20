import { useState } from 'react';
import FiltersContainer from '@/components/FiltersContainer';
import ShoeCatalogue from '@/components/ShoeCatalogue';
import { shoes } from '@/consts/shoes';

export default function Catalogue() {
  const [filters, setFilters] = useState({
    maker: 'Todos',
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return filters.maker === 'Todos' || product.maker === filters.maker;
    });
  };

  const filteredProducts = filterProducts(shoes);

  return (
    <section id="catalogue" className="flex flex-col mx-16 mt-8">
      <FiltersContainer changeFilters={setFilters} />
      <ShoeCatalogue shoes={filteredProducts} />
    </section>
  );
}
