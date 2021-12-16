import './App.css';
import Login from './Login';
import Display from './info';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';

function App() {
  return (
    <Router>
      <div className="App">
        <header className='App-header'>
          <Routes>
            <Route path='/' element={<Login/>} />
            <Route path='/display' element={<Display/>} />
          </Routes>
        </header>
      </div>
    </Router>
  );
}

export default App;