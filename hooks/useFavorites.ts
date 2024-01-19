import { useSelector } from "react-redux";
import { selectFavorites } from "../redux/slices/favoritesSlice";
import { CharacterI } from "../interfaces/rickAndMorty.interface";

export const useFavorites = () => {
  const favoritesIds = useSelector(selectFavorites);

  function getFavorites(characters: CharacterI[] | undefined) {
    if (characters === undefined) {
      return [];
    }
    return characters.filter((character) =>
      favoritesIds.find((id) => id === character?.id)
    );
  }

  function isFavorite(id: number) {
    return favoritesIds.includes(id);
  }

  return { getFavorites, isFavorite };
};
