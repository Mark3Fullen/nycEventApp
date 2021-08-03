import EventContainer from "./EventContainer"

function Sports( {events} ) {

    const sportsEvents = events.filter( event => event.event_name.toLowerCase().includes('sport') )

    return (
        <>
            <h1>Sports</h1>
            <EventContainer events={sportsEvents} />
        </>
    )
}

export default Sports