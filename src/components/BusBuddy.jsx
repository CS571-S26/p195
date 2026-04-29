import { useState } from "react";
import { Outlet } from "react-router";
import BusBuddyNavbar from "./nav/BusBuddyNavbar";
import { BusBuddyProvider } from "../contexts/BusBuddyDataContext";

export default function BusBuddy() {
    
    const placeholderBuses = [
        { id: 1, name: "Route 80", stops: 
            [   
                "Langdon & Memorial Union", 
                "Observatory & Elm",
                "University Bay & Lot 60",
                "Eagle Heights & Brown Shelter",
                "Marsh & Lot 76",
                "Randall & Engineering"
            ],
            image: "https://www.cityofmadison.com/sites/default/files/metro/images/80.png",
            link: "https://www.cityofmadison.com/metro/routes-schedules/route-80"
        },
        { id: 2, name: "Route 81", stops: 
            [   
                "Langdon & Memorial Union", 
                "Blair & Johnson",
                "BW Washington & Bedford"
            ],
            image: "https://www.cityofmadison.com/sites/default/files/metro/images/routes/81-0823.png",
            link: "https://www.cityofmadison.com/metro/routes-schedules/route-81" 
        },
        { id: 3, name: "Route 82", stops: 
            [   
                "Langdon & Memorial Union", 
                "Walnut & Observatory",
                "Regent & Breese"
            ],
            image: "https://www.cityofmadison.com/sites/default/files/metro/images/routes/rte_82_color_2021.png",
            link: "https://www.cityofmadison.com/metro/routes-schedules/route-82" 
        },
        { id: 4, name: "Route 84", stops: 
            [   
                "Eagle Heights & Brown Shelter",
                "Lake Mendota & Eagle Heights",
                "Highland & UW Hospital",
                "Observatory & Easterday",
                "Linden & Charter",
                "Linden & Babcock",
            ],
            image: "https://www.cityofmadison.com/sites/default/files/metro/images/84.png",
            link: "https://www.cityofmadison.com/metro/routes-schedules/route-84" 
        }
    ];

    const placeholderStops = [
        { id: 1, name: "Blair & Johnson", buses: ["Route 81"] },
        { id: 2, name: "Eagle Heights & Brown Shelter", buses: ["Route 80", "Route 84"] },
        { id: 3, name: "Highland & UW Hospital", buses: ["Route 84"] },
        { id: 4, name: "Lake Mendota & Eagle Heights", buses: ["Route 84"] },
        { id: 5, name: "Langdon & Memorial", buses: ["Route 80", "Route 81", "Route 82"] },
        { id: 6, name: "Linden & Babcock", buses: ["Route 84"] },
        { id: 7, name: "Linden & Charter", buses: ["Route 84"] },
        { id: 8, name: "Marsh & Lot 76", buses: ["Route 80"] },
        { id: 9, name: "Observatory & Easterday", buses: ["Route 84"] },
        { id: 10, name: "Observatory & Elm", buses: ["Route 80"] },
        { id: 11, name: "Randall & Engineering", buses: ["Route 80"] },
        { id: 12, name: "Regent & Breese", buses: ["Route 82"] },
        { id: 13, name: "University Bay & Lot 60", buses: ["Route 80"] },
        { id: 14, name: "W Washington & Bedford", buses: ["Route 81"] },
        { id: 15, name: "Walnut & Observatory", buses: ["Route 82"] }
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