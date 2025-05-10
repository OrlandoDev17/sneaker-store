import { useState } from 'react';

export function useFilters() {
  const [filters, setFilters] = useState({
    maker: 'Todos',
  });

  const filterProducts = (products) => {
    return products.filter((product) => {
      return filters.maker === 'Todos' || product.maker === filters.maker;
    });
  };

  return { filterProducts, setFilters };
}
