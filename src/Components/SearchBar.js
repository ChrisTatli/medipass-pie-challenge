import React from 'react'
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';

const SearchBar = (props)=>{
    return(
        <div>
            <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Search for Pies"
                        margin="normal"
                        onChange={props.onSearchChange}
            />
            {props.order === "desc" ? (
            <Button 
              size="small" 
              onClick ={props.changeOrder}
              color = "primary"
            >
              Ascending Price
            </Button>
            ):(
            <Button 
              size="small" 
              onClick ={props.changeOrder}
              color = "primary"
            >
              Descending Price
            </Button>
            )}
        </div>
    )
}


export default SearchBar