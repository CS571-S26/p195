import { createContext, useState, useEffect } from "react";

const BusBuddyDataContext = createContext();

export function BusBuddyProvider({ children, buses, stops }) {
    const [favoritedBusIds, setFavoritedBusIds] = useState(() => {
        try {
            const stored = JSON.parse(sessionStorage.getItem("favoritedBusIds"));
            return Array.isArray(stored) ? stored : [];
        } catch {
            return [];
        }
    });

    const [favoritedStopIds, setFavoritedStopIds] = useState(() => {
        try {
            const stored = JSON.parse(sessionStorage.getItem("favoritedStopIds"));
            return Array.isArray(stored) ? stored : [];
        } catch {
            return [];
        }
    });

    useEffect(() => {
        sessionStorage.setItem("favoritedBusIds", JSON.stringify(favoritedBusIds));
    }, [favoritedBusIds]);

    useEffect(() => {
        sessionStorage.setItem("favoritedStopIds", JSON.stringify(favoritedStopIds));
    }, [favoritedStopIds]);

    function favoriteBus(id, name) {
        alert(`${name} has been added to your favorite buses!`);
        setFavoritedBusIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    }

    function unfavoriteBus(id, name) {
        alert(`${name} has been removed from your favorite buses!`);
        setFavoritedBusIds(prev => prev.filter(busId => busId !== id));
    }

    function favoriteStop(id, name) {
        alert(`${name} has been added to your favorite stops!`);
        setFavoritedStopIds(prev => (prev.includes(id) ? prev : [...prev, id]));
    }

    function unfavoriteStop(id, name) {
        alert(`${name} has been removed from your favorite stops!`);
        setFavoritedStopIds(prev => prev.filter(stopId => stopId !== id));
    }

    return (
        <BusBuddyDataContext.Provider 
            value={{ buses, stops, favoritedBusIds, favoritedStopIds, 
            favoriteBus: favoriteBus, unfavoriteBus: unfavoriteBus, 
            favoriteStop: favoriteStop, unfavoriteStop: unfavoriteStop}}
        >
            {children}
        </BusBuddyDataContext.Provider>
    );
}

export default BusBuddyDataContext;