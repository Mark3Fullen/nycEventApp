import EventContainer from "./EventContainer";

function KidsYouth( {events} ) {

    const kidsYouthEvents = events.filter( event => event.event_name.toLowerCase().includes('kid') || event.event_name.toLowerCase().includes('youth'))

    return (
        <>
            <h1>Kids/Youth</h1>
            <EventContainer events={kidsYouthEvents} />
        </>
    )
}

export default KidsYouth