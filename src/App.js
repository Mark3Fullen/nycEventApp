import { BrowserRouter, Route } from 'react-router-dom';
import './App.css';
import Home from './Components/Home'

function App() {
  return (
    <div className="App">
      <header className="Header">
          <h1>Welcome to the Borough!</h1>
      </header>
      <aside className="Aside">
        <ul>
          <li>
            Link 1
          </li>
          <li>
            Link 2
          </li>
          <li>
            Link 3
          </li>
        </ul>
      </aside>
      <BrowserRouter>
        <Route path="/">
          <Home />
        </Route>
     </BrowserRouter>
    </div>
    
  );
}

export default App;
