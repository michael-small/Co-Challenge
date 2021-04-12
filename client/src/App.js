import Cockpit from './components/Cockpit/Cockpit';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

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
