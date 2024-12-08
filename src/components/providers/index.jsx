import { FavoritesProvider } from "./Favorites";

/**
 * A wrapper component that provides context providers to the app
 * @param {Object} props - The component props
 * @param {React.ReactNode} props.children - The child components to wrap with providers
 * @returns {JSX.Element} Rendered provider wrapper component
 */
export default function Providers({ children }) {
  return <FavoritesProvider>{children}</FavoritesProvider>;
}
