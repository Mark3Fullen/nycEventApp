import { Typography } from '@material-ui/core';

function Home({ events }) {
    return (<div>
        <div style={{padding:"20px",
                    margin: "30px"}}>
            <Typography variant="h3">Home</Typography></div>
            <div style={{padding:"20px",
                    margin: "30px"}}>
            <Typography variant="h6">Welcome to our NYC Park Event App! Please sift through our ever-updating list of permitted NYC park events! To start, simply type into the search bar or click on one of our navigational categories!</Typography></div>
        </div>
    )
}

export default Home