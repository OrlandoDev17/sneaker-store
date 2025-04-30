import FilterButtons from './FilterButtons';
import { SearchIcon } from '@/icons/icons';

export default function FiltersContainer({ changeFilters }) {
  return (
    <div className="flex flex-col md:flex-row items-end gap-2 justify-between mt-4">
      <FilterButtons onChange={changeFilters} />
      <div className="flex items-center gap-6">
        <div className="relative group">
          <input
            type="search"
            className="absolute w-0 px-4 rounded-2xl h-12 right-15 text-lg group-hover:w-64 group-hover:bg-light transition-all duration-500 outline-none focus:ring-2 focus:ring-primary"
            placeholder="Buscar..."
          />
        </div>
      </div>
    </div>
  );
}
