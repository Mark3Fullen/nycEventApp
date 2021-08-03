import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import Home from './Components/Home'
import Sports from './Components/Sports'
import Music from './Components/Music'
import Construction from './Components/Construction';
import Nav from "./Components/Nav"

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/tvpp-9vvx.json')
      .then(res => {return res.json()})
      .then(json => {setEvents([...new Map(json.map(event => [event.event_id, event])).values()])})},
       [])

      const [dropDownValue, setDropDownValue] = useState('')
      const [searchBarValue, setSearchBarValue] = useState('')

      function dropDownHandler(e) {
          setDropDownValue(e)
      }

      function searchHandler(e) {
          setSearchBarValue(e)
      }

      const filteredEvents = events.filter(event => event.event_borough.includes(dropDownValue) && event.event_name.toLowerCase().includes(searchBarValue.toLowerCase()))

  return (
    <div className="App">
      <header className="Header">
        <h1>Welcome to the Borough!</h1>
      </header>

        <div>
          <input type="text" placeholder="what do you want to see?" onChange={e => searchHandler(e.target.value)}/>

          <select onChange={e => dropDownHandler(e.target.value)}>
            <option value=''>All Boroughs</option>
            <option value="Manhattan">Manhattan</option>
            <option value="Queens">Queens</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Staten Island">Staten Island</option>
            <option value="Bronx">Bronx</option>
          </select>
        </div>

    

        <div className="Content">
          <BrowserRouter>
            <aside className="Aside">
            <Nav/>
            </aside>
            <Route exact path="/">
              <Home events={filteredEvents} />
            </Route>
            <Route path="/sports">
              <Sports exact events={filteredEvents}/>
            </Route>
            <Route path="/music">
              <Music exact events={filteredEvents}/>
            </Route>
            <Route path="/construction">
              <Construction exact events={filteredEvents}/>
            </Route>
          </BrowserRouter>
        </div>

    </div>

  );
}

export default App;