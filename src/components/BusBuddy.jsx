import { useState } from "react";
import { Outlet } from "react-router";
import BusBuddyNavbar from "./nav/BusBuddyNavbar";
import { BusBuddyProvider } from "../contexts/BusBuddyDataContext";

export default function BusBuddy() {
    
    const placeholderBuses = [
        { id: 1, name: "Bus A", stops: ["Stop ABCDE", "Stop ACE", "Stop AB"] },
        { id: 2, name: "Bus B", stops: ["Stop ABCDE", "Stop BCD", "Stop AB"] },
        { id: 3, name: "Bus C", stops: ["Stop ABCDE", "Stop ACE", "Stop BCD"] },
        { id: 4, name: "Bus D", stops: ["Stop ABCDE", "Stop BCD", "Stop D"] },
        { id: 5, name: "Bus E", stops: ["Stop ABCDE", "Stop ACE", "Stop E"] }
    ];

    const placeholderStops = [
        { id: 1, name: "Stop ABCDE", buses: ["Bus A", "Bus AB", "Bus C", "Bus D", "Bus E",] },
        { id: 2, name: "Stop ACE", buses: ["Bus A", "Bus C", "Bus E"] },
        { id: 3, name: "Stop AB", buses: ["Bus A", "Bus B"] },
        { id: 4, name: "Stop BCD", buses: ["Bus B", "Bus C", "Bus D"] },
        { id: 5, name: "Stop D", buses: ["Bus D"] },
        { id: 6, name: "Stop E", buses: ["Bus E"] }
    ];

    const [buses, setBuses] = useState(placeholderBuses);
    const [stops, setStops] = useState(placeholderStops)

    return (
        <BusBuddyProvider buses={buses} stops={stops}>
            <BusBuddyNavbar />
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </BusBuddyProvider>
    );
}