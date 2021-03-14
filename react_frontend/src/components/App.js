import '../style/App.css';
import { Route } from 'react-router-dom';
//Components
import NavbarMain from './layout/navbar/NavbarMain';
import Landing from './layout/Landing';
import UnauthorizedRoutes from './routes/UnauthorizedRoutes';

function App() {
	return (
		<>
			<NavbarMain />
			<Route exact path="/" component={Landing} />
			<UnauthorizedRoutes />
		</>
	);
}

export default App;
