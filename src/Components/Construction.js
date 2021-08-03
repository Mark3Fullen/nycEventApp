import EventContainer from "./EventContainer";

function Construction( {events} ) {
    
    const constructionEvents = events.filter( event => event.event_name.toLowerCase().includes('construction') ) 

    return (
        <>
            <h1>Construction</h1>
            <EventContainer events={constructionEvents}/>
        </>
    )
}

export default Construction