import { atom } from 'nanostores';

export const searchStore = atom('');

export const handleSearchCange = (e: { target: { value: string } }) => {
  searchStore.set(e.target.value);
};
