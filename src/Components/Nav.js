import {Link} from 'react-router-dom'
import {Tabs, Tab , AppBar} from '@material-ui/core'
import { useState} from 'react'
import InputBase from '@material-ui/core/InputBase';
import Toolbar from '@material-ui/core/Toolbar';
function Nav(){
// return (<nav>
//     <NavLink exact to ="/">Home</NavLink>
//     <NavLink to= "/sports">Sports</NavLink>
//     <NavLink to= "/music">Music</NavLink>
//     <NavLink to= "/construction">Construction</NavLink>
//     <NavLink to= "/food">Food</NavLink>
//     <NavLink to= "/KidsYouth">Kids/Youth</NavLink>
// </nav>
// )
// }
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