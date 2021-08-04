import EventContainer from "./EventContainer"

function Sports( {events} ) {

    const sportsEvents = events.filter( event => event.event_name.toLowerCase().includes('sport') ||event.event_name.toLowerCase().includes('soccer') ||event.event_name.toLowerCase().includes('basketball') ||event.event_name.toLowerCase().includes('tournament')||event.event_location.toLowerCase().includes('basketball'))

    return (
        <>
            <h1>Sports</h1>
            <EventContainer events={sportsEvents} />
        </>
    )
}

export default Sports