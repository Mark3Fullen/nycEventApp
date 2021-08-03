import EventContainer from "./EventContainer"

function Home({ events }) {
    return (
        <>
            <h1>Home</h1>
            <EventContainer events={events} />

        </>
    )
}

export default Home