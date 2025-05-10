import FilterButtons from './FilterButtons';
import SearchBar from './SearchBar';

export default function FiltersContainer({ changeFilters }) {
  return (
    <div className="flex flex-col w-full md:flex-row items-center gap-2 justify-between mt-4">
      <FilterButtons onChange={changeFilters} />
      <SearchBar />
    </div>
  );
}
