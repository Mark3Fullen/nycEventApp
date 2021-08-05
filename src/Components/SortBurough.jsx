import FormControl from '@material-ui/core/FormControl';
import NativeSelect from '@material-ui/core/NativeSelect';
import FormHelperText from '@material-ui/core/FormHelperText';
import Grid from '@material-ui/core/Grid'

function SortBurough({ dropDownHandler }) {
  
return ( <Grid item>
<FormControl >
        
        <NativeSelect
          // value={''}
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
      </FormControl> </Grid>)}

export default SortBurough