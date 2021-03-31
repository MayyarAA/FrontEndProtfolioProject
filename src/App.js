import './App.css';
import Container from '@material-ui/core/Container';
import { ToolbarComponent } from './Components/Toolbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { ExperiencesTotalText } from './Components/Experiences';
import Home from './Pages/Home';
import { StylesProvider } from '@material-ui/core';
function App() {
	return (
		<div className='homeBackground'>
			<div className='hi'>
				<Router>
					<StylesProvider injectFirst>
						{/* <Container> */}
						{ToolbarComponent()}
						<Home />
						<br />
						<br />
						{/* </Container> */}
					</StylesProvider>
				</Router>
			</div>
		</div>
	);
}

export default App;
