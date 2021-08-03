import { useState } from "react"
import EventContainer from "./EventContainer"

function Home({ events }) {
    const [dropDownValue, setDropDownValue] = useState('')
    const [searchBarValue, setSearchBarValue] = useState('')

    function dropDownHandler(e) {
        setDropDownValue(e)
    }

    function searchHandler(e) {
        setSearchBarValue(e)
    }

    console.log(searchBarValue)

    const filteredEvents = events.filter(event => event.event_borough.includes(dropDownValue) ) && events.filter(event => event.event_name.toLowerCase().includes(searchBarValue.toLowerCase()) )

    return (
        <>
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

            <EventContainer events={filteredEvents} />

        </>
    )
}

export default Home