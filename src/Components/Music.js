import EventContainer from "./EventContainer";

function Music( {events} ) {

    const musicEvents = events.filter( event => event.event_name.toLowerCase().includes('music') || event.event_name.toLowerCase().includes('band') || event.event_name.toLowerCase().includes('jam') || event.event_name.toLowerCase().includes('dj') )

    return (
        <>
            <h1>Music</h1>
            <EventContainer events={musicEvents} />
        </>
    )
}

export default Music