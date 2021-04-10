import CssBaseline from '@material-ui/core/CssBaseline';
import { BrowserRouter, Route } from 'react-router-dom';
import Cockpit from './components/Cockpit/Cockpit';

function App() {
	return (
		<CssBaseline>
			<div className='App'>
				<BrowserRouter>
					<Route path='/' component={Cockpit} />
				</BrowserRouter>
			</div>
		</CssBaseline>
	);
}

export default App;
