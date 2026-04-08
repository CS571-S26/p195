import ReactDOM from 'react-dom/client'
import { HashRouter } from 'react-router-dom'
import BusBuddyRouter from './components/nav/BusBuddyRouter.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <HashRouter>
    <BusBuddyRouter />
  </HashRouter>
)
