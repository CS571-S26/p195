
import './App.css'
import { Routes, Route } from 'react-router-dom'
import BusBuddy from "./components/BusBuddy";
import StartPage from "./components/nav/pages/StartPage";
import BusPage from "./components/nav/pages/BusPage";
import Favorites from "./components/nav/pages/Favorites";
import BusBuddy404 from "./components/nav/pages/BusBuddy404";

function App() {
	return (
		<Routes>
			<Route path="/p195" element={<BusBuddy />}>
				<Route index element={<StartPage />} />
				<Route path="university-buses" element={<BusPage />} />
				<Route path="favorites" element={<Favorites />} />
				<Route path="*" element={<BusBuddy404 />} />
			</Route>
		</Routes>
	)
}

export default App
