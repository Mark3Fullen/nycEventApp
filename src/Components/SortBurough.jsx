import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';

function SortBurough({ dropDownHandler }) {
  
return ( <div>
<FormControl >
        
        <NativeSelect
          value={''}
          onChange={e =>  dropDownHandler(e.target.value)}
          inputProps={{
            name: 'burough',
            id: 'burough-native-helper',
          }}
          style={{marginTop:"6px"}}
        >
          <option  value='' > All Buroughs </option>
            <option value="Manhattan">Manhattan</option>
            <option value="Queens">Queens</option>
            <option value="Brooklyn">Brooklyn</option>
            <option value="Staten Island">Staten Island</option>
            <option value="Bronx">Bronx</option>
        </NativeSelect>
        <FormHelperText>Sort by Burough</FormHelperText>
      </FormControl> </div>)}

export default SortBurough