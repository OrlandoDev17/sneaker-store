import { createContext } from 'react';

// Crear el contexto
export const FiltersContext = createContext();

// Crear el provider
export function FiltersProvider({ children }) {
  return (
    <FiltersContext.Provider
      value={{
        maker: 'Todos',
      }}
    >
      {children}
    </FiltersContext.Provider>
  );
}
