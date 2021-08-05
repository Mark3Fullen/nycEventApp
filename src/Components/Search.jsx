import SearchField from "react-search-field";

function Search( {searchHandler}){
return (
    <SearchField
    style={{margin: "10px"}}
  placeholder="Search..."
  onChange={searchHandler}
  
  classNames="test-class"
/>)
}

export default Search