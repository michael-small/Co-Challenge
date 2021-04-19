import Cockpit from './components/Cockpit/Cockpit';
import { BrowserRouter, Route } from 'react-router-dom';

import CssBaseline from '@material-ui/core/CssBaseline';

import { UserContextProvider } from "./Context";

function App() {
	return (
		<CssBaseline>
			<UserContextProvider>
			<div className='App'>
				<BrowserRouter>
					<Route exact path='/' component={Cockpit} />
				</BrowserRouter>
			</div>
			</UserContextProvider>
		</CssBaseline>
	);
}

export default App;
