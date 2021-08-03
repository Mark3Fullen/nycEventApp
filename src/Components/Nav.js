import {NavLink} from 'react-router-dom'

function Nav(){
return (<nav>
    <NavLink exact to="/">Home</NavLink>
    <NavLink to= "/sports">Sports</NavLink>
    <NavLink to = "/music">Music</NavLink>
    
</nav>
)
}

export default Nav