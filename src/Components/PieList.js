import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {client} from '../Client';
import TextField from '@material-ui/core/TextField';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Button from '@material-ui/core/Button';

import Pie from "./Pie"

class PieList extends Component{

  state = {
    pies: [],
    stores: [],
    offset: 1,
    order: "asc",
    searchString: ""
  };
  constructor(){
    super();
    this.getPies(this.state.offset, this.state.order, this.state.searchString);
    this.getStores();
  }
 


  getPies = (pageOffset, order, searchString) => {
    client.getPies(pageOffset, order, searchString)
    .then((pies) => (
      this.setState({
        pies: pies,
      })
    ));
  }

  nextPage = () => {
    this.setState({
      offset: this.state.offset + 1,
    });
    this.getPies(this.state.offset + 1, this.state.order, this.state.searchString);
  }
  
  prevPage = () =>{
    this.setState({
      offset: this.state.offset - 1,
    })
    this.getPies(this.state.offset - 1, this.state.order, this.state.searchString);
  }

  getStores = () => {
    client.getStores()
    .then((stores) => (
      this.setState({
        stores: stores,
      })
    ));
  }

  onSearchChange = (e) => {
    if(e.target.value){
      this.setState({
        searchString: e.target.value
      })
     } else {
        this.setState({
          searchString: ""
        })
      }
    
    this.getPies(this.state.offset, this.state.order, this.state.searchString)
  }


  changeOrder = () => {
    if(this.state.order === "asc"){
      let o = "desc";
      this.setState({
        order: o,
      })
      this.getPies(this.state.offset, o, this.state.searchString)
    } else {
      let o = "asc";
      this.setState({
        order: o,
      })
      this.getPies(this.state.offset, o, this.state.searchString)
    }
  }

  

  render(){
      return (
        <div>
          <Grid container spacing={24} style={{padding:24}}>
            {this.state.pies ? (
                <div>
                  
                    <TextField style={{padding: 24}}
                        id="searchInput"
                        placeholder="Search for Pies"
                        margin="normal"
                        onChange={this.onSearchChange}
                    />
                    {this.state.order === "desc" ? (
                      <Button 
                      size="small" 
                      onClick ={this.changeOrder}
                      color = "primary"
                    >
                      Ascending Price
                    </Button>
                    ) : (
                      <Button 
                      size="small" 
                      onClick ={this.changeOrder}
                      color = "primary"
                    >
                      Descending Price
                    </Button>
                    )}
                    
                    <Grid container spacing={24} style={{padding: 24}}>
                        <List>
                            {this.state.pies.map(currentPie => {  
                                let store = this.state.stores.find(p => p.id === currentPie.storeId);                      
                                return(
                                <ListItem>
                                    <Pie pie = {currentPie} 
                                         store = {store}/>
                                </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                    {this.state.offset === 1 ? null : (
                      <Button 
                        size="medium" 
                        onClick ={this.prevPage}
                        color = "primary"
                      >
                        Previous
                      </Button>
                    )}
                    {this.state.pies.length < 5 ? null : (
                    <Button 
                      size="medium" 
                      onClick ={this.nextPage}
                      color = "primary"
                    >
                      Next
                    </Button>
                    )}
                </div>
            ) : "No pies Found"}
            </Grid>
        </div>
      )
    };

}

export default PieList;