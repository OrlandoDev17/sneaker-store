import FilterButtons from './FilterButtons';
import { SearchIcon } from '@/icons/icons';
import { CartIcon } from '@/icons/icons';

export default function FiltersContainer({ changeFilters }) {
  return (
    <div className="hidden md:flex justify-between mt-4">
      <FilterButtons onChange={changeFilters} />
      <div className="flex items-center gap-6">
        <div className="relative group">
          <input
            type="search"
            className="absolute w-0 px-4 rounded-2xl h-12 right-15 text-lg group-hover:w-64 group-hover:bg-light transition-all duration-500 outline-none focus:ring-2 focus:ring-primary"
            placeholder="Buscar..."
          />
          <SearchIcon className="relative text-primary top-0 cursor-pointer size-12 bg-light p-2 rounded-full hover:outline-2 hover:outline-primary" />
        </div>
        <CartIcon className="text-primary size-12 bg-light cursor-pointer p-2 rounded-full hover:outline-2 hover:outline-primary hover:scale-125 transition-transform" />
      </div>
    </div>
  );
}
