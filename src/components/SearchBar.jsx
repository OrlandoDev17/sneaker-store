import { useId } from 'react';

import { SearchIcon } from '@/icons/icons';

import { handleSearchCange } from '@/stores/searchStore';

export default function SearchBar() {
  const searchId = useId();

  return (
    <div className="flex items-center justify-center">
      <form className="search-form relative flex items-center justify-center group">
        <label className="relative cursor-pointer" htmlFor={searchId}>
          <SearchIcon className="size-10 md:size-14 border-2 p-1 md:p-2 rounded-full inline-block group-hover:border-blue-500 group-hover:text-blue-500 group-hover:scale-110 transition" />
        </label>
        <input
          className="absolute right-16 w-0 invisible bg-light py-3 px-2 rounded-2xl text-base font-semibold text-primary outline-none focus:ring-2 focus:ring-blue-500 group-hover:visible group-hover:w-56 transition-all"
          id={searchId}
          onChange={handleSearchCange}
          type="search"
          placeholder="Nike, Adidas, Jordan..."
        />
      </form>
    </div>
  );
}
