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
        { id: 5, name: "Bus E", stops: ["Stop ABCDE", "Stop ACE", "Stop E"] },
    ];

    const [buses, setBuses] = useState(placeholderBuses);

    return (
        <BusBuddyProvider buses={buses}>
            <BusBuddyNavbar />
            <div style={{ margin: "1rem" }}>
                <Outlet />
            </div>
        </BusBuddyProvider>
    );
}