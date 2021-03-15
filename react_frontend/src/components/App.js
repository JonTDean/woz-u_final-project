import '../style/App.css';
import { Route } from 'react-router-dom';
//Components
import NavbarMain from './layout/navbar/NavbarMain';
import Landing from './layout/Landing';
import UnauthorizedRoutes from './routes/UnauthorizedRoutes';
import Alert from './utils/Alert/Alert';

function App() {
	return (
		<>
			<NavbarMain />
			<Route exact path="/" component={Landing} />
			<UnauthorizedRoutes />
			<Alert />
		</>
	);
}

export default App;
