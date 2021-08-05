import SearchField from "react-search-field";
import Grid from '@material-ui/core/Grid'

function Search( {searchHandler}){
return (
  <Grid item >
    <SearchField
    style={{margin: "10px"}}
  placeholder="Search..."
  onChange={searchHandler}
  
  classNames="test-class"
/></Grid>)
}

export default Search