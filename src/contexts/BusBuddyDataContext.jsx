import { createContext, useState, useEffect } from "react";

const BusBuddyDataContext = createContext();

export function BusBuddyProvider({ children, buses }) {
    const [favoritedBusIds, setFavoritedBusIds] = useState(() => {
        try {
            const stored = JSON.parse(sessionStorage.getItem("favoritedBusIds"));
            return Array.isArray(stored) ? stored : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        sessionStorage.setItem("favoritedBusIds", JSON.stringify(favoritedBusIds));
    }, [favoritedBusIds]);

    function favorite(id, name) {
        alert(`${name} has been added to your favorites!`);
        setFavoritedBusIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    }

    function unfavorite(id, name) {
        alert(`${name} has been removed from your favorites!`);
        setFavoritedBusIds(prev => prev.filter(busId => busId !== id));
    }

    return (
        <BusBuddyDataContext.Provider value={{ buses, favoritedBusIds, favorite, unfavorite }}>
            {children}
        </BusBuddyDataContext.Provider>
    );
}

export default BusBuddyDataContext;