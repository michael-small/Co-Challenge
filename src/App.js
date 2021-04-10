import logo from './logo.svg';
import './App.css';

function App() {
	return (
		<div className='App'>
			<h1>CoChallenge</h1>
			<div>
				<p id='about'>
					CoSchedule coding challenge to make a fullstack CRUD site
				</p>
				<h3>Requirements:</h3>
				<ul>
					<li>Pick a pre-approved API </li>
					<li>
						Backend: Create API for CRUD, include comment system
					</li>
					<li>
						Frontend: Search data source, user can rate an item
						source, user can rate an item
					</li>
					<li>e2e auth as a bonus</li>
				</ul>
			</div>
		</div>
	);
}

export default App;
