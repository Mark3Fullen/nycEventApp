import EventContainer from "./EventContainer"
import { Typography } from '@material-ui/core';

function Home({ events }) {
    return (<div>
        <div style={{padding:"20px",
                    margin: "30px"}}>
            <Typography variant="h3">Home</Typography></div>
            <EventContainer events={events} />

        </div>
    )
}

export default Home