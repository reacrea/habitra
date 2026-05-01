import { useEffect, useState } from "react";

import type { PublicPropertyCard } from "@/server/public-b2c";
import {
  SHORTLISTS_EVENT,
  clearCompare,
  clearFavorites,
  getCompareItems,
  getFavorites,
  isFavorite,
  isInCompare,
  toggleCompare,
  toggleFavorite,
} from "@/services/public-shortlists";

type ShortlistsState = {
  favorites: PublicPropertyCard[];
  compare: PublicPropertyCard[];
};

export function usePublicShortlists() {
  const [state, setState] = useState<ShortlistsState>({ favorites: [], compare: [] });

  useEffect(() => {
    const refresh = () => {
      setState({ favorites: getFavorites(), compare: getCompareItems() });
    };
    refresh();
    window.addEventListener("storage", refresh);
    window.addEventListener(SHORTLISTS_EVENT, refresh);
    return () => {
      window.removeEventListener("storage", refresh);
      window.removeEventListener(SHORTLISTS_EVENT, refresh);
    };
  }, []);

  return {
    favorites: state.favorites,
    compare: state.compare,
    favoritesCount: state.favorites.length,
    compareCount: state.compare.length,
    isFavorite,
    isInCompare,
    toggleFavorite,
    toggleCompare,
    clearFavorites,
    clearCompare,
  };
}
