import { createContext, useState, useContext, useEffect } from "react";

const FavoritesContext = createContext(undefined);

/**
 * Provider component for managing favorite products with localStorage persistence
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - Child components to wrap with the provider
 * @returns {JSX.Element} Rendered provider component
 */
export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const storedFavorites = JSON.parse(
      localStorage.getItem("favorites") || "[]"
    );
    setFavorites(storedFavorites);
  }, []);

  /**
   * Adds a product to favorites
   * @param {Object} product - The product to add to favorites
   */
  const addFavorite = (product) => {
    const filteredFavorites = [...favorites, product];
    setFavorites(filteredFavorites);
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
  };

  /**
   * Removes a product from favorites
   * @param {Object} product - The product to remove from favorites
   */
  const removeFavorite = (product) => {
    const filteredFavorites = favorites.filter((fav) => fav.id !== product.id);

    setFavorites(filteredFavorites);
    localStorage.setItem("favorites", JSON.stringify(filteredFavorites));
  };

  /**
   * Checks if a product is in favorites
   * @param {Object} product - The product to check
   * @returns {boolean} Whether the product is in favorites
   */
  const isFavorite = (product) =>
    favorites.some((fav) => fav.id === product.id);

  return (
    <FavoritesContext.Provider
      value={{ favorites, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </FavoritesContext.Provider>
  );
}

/**
 * Custom hook to access the favorites context
 * @returns {Object} Favorites context value containing favorites array and methods
 * @throws {Error} If used outside of FavoritesProvider
 */
export function useFavorites() {
  const context = useContext(FavoritesContext);
  if (context === undefined) {
    throw new Error("useFavorites must be used within a FavoritesProvider");
  }
  return context;
}
