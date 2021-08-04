import { BrowserRouter, Route } from 'react-router-dom';
import { useEffect, useState } from 'react'
import './App.css';
import Home from './Components/Home'
import Sports from './Components/Sports'
import Music from './Components/Music'
import Construction from './Components/Construction';
import Food from './Components/Food';
import Nav from "./Components/Nav"
import KidsYouth from "./Components/KidsYouth"

function App() {

  const [events, setEvents] = useState([])

  useEffect(() => {
    fetch('https://data.cityofnewyork.us/resource/tvpp-9vvx.json')
      .then(res => {
        return res.json()
      })
      .then(json => { setEvents(json.filter( event => Date.parse(event.start_date_time) > Date.parse(new Date())).sort(function(a,b){ return Date.parse(a.start_date_time) - Date.parse(b.start_date_time)}))
      })
  }, [])

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

    

        <div className="Directory">
          <BrowserRouter>
            <aside className="Aside">
              <Nav/>
            </aside>
            <div className="Content">
            <Route exact path="/">
              <Home events={filteredEvents} />
            </Route>
            <Route path="/sports">
              <Sports events={filteredEvents}/>
            </Route>
            <Route path="/music">
              <Music events={filteredEvents}/>
            </Route>
            <Route path="/construction">
              <Construction events={filteredEvents}/>
            </Route>
            <Route path="/food">
              <Food events={filteredEvents}/>
            </Route>
            <Route path="/KidsYouth">
              <KidsYouth events={filteredEvents}/>
            </Route>
            </div>
          </BrowserRouter>
        </div>

    </div>

  );
}

export default App;