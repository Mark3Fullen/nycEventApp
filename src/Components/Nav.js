import {Link} from 'react-router-dom'
import {Tabs, Tab , AppBar} from '@material-ui/core'
import { useState} from 'react'

function Nav(){
//
const [ tabValue, setTabValue] = useState(0);
const handleTabs = (e,val) =>  {
    setTabValue(val)
}
return (<div style={{width:"100%"}}>
    
    <AppBar position="static" style={{marginBottom: "12px"}}>
        
        <Tabs value={tabValue}  onChange={handleTabs} >
            <Tab label ="Home" to='/' component={Link}/>
            <Tab label ="Sports" to='/sports' component={Link}/>
            <Tab label ="Music" to='/music' component={Link}/>
            <Tab label ="Construction" to='/construction' component={Link} />
            <Tab label ="Food" to='/food' component={Link} />
            <Tab label ="Kids" to='/KidsYouth' component={Link} />
        </Tabs>
        
    </AppBar>
</div>

)
}
export default Nav