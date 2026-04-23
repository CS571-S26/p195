
import './App.css'
import { Routes, Route } from 'react-router-dom'
import BusBuddy from "./components/BusBuddy";
import StartPage from "./components/nav/pages/StartPage";
import BusPage from "./components/nav/pages/BusPage";
import FavoriteBus from "./components/nav/pages/FavoriteBus";
import BusBuddy404 from "./components/nav/pages/BusBuddy404";
import StopPage from "./components/nav/pages/StopPage";
import FavoriteStop from "./components/nav/pages/FavoriteStop";

function App() {
	return (
		<Routes>
			<Route path="/" element={<BusBuddy />}>
				<Route index element={<StartPage />} />
				<Route path="university-buses" element={<BusPage />} />
				<Route path="favorite-buses" element={<FavoriteBus />} />
				<Route path="bus-stops" element={<StopPage />} />
				<Route path="favorite-stops" element={<FavoriteStop />} />
				<Route path="*" element={<BusBuddy404 />} />
			</Route>
		</Routes>
	)
}

export default App
