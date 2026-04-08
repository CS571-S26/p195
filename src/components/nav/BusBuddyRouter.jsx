import { HashRouter, Route, Routes } from "react-router-dom";

import BusBuddy from "../BusBuddy";
import StartPage from "./pages/StartPage";
import BusPage from "./pages/BusPage";
import Favorites from "./pages/Favorites";
import BusBuddy404 from "./pages/BusBuddy404";

export default function BusBuddyRouter() {
    return (
        <HashRouter>
            <Routes>
                <Route path="/p195" element={<BusBuddy />}>
                    <Route index element={<StartPage />} />
                    <Route path="university-buses" element={<BusPage />} />
                    <Route path="favorites" element={<Favorites />} />
                    <Route path="*" element={<BusBuddy404 />} />
                </Route>
            </Routes>
        </HashRouter>
    );
}