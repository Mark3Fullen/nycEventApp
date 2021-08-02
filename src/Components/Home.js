import EventContainer from "./EventContainer"

function Home({ events }) {

    return (
        <>
            <h1>This is the home page</h1>
            <p>This is the home page info</p>
            <EventContainer events={events} />
        </>
    )
}

export default Home