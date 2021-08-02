import EventContainer from "./EventContainer"

function Home({ events }) {

    return (
        <>
            <input type="text" placeholder="what do you want to see?" />
            <select>
                <option value="Manhattan">Manhattan</option>
                <option value="Queens">Queens</option>
                <option value="Brooklyn">Brooklyn</option>
                <option value="Staten Island">Staten Island</option>
                <option value="Bronx">Bronx</option>
            </select>
            <EventContainer events={events} />
        </>
    )
}

export default Home