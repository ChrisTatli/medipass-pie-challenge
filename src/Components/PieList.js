import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import {client} from '../Services/Client';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';


import Pie from "./Pie"
import SearchBar from "./SearchBar"
import Pager from "./Pager"

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
    
    this.getPies(this.state.offset, this.state.order, e.target.value)
  }


  changeOrder = () => {
    if(this.state.order === "asc"){
      let order = "desc";
      this.setState({
        order: order,
      })
      this.getPies(this.state.offset, order, this.state.searchString)
    } else {
      let order = "asc";
      this.setState({
        order: order,
      })
      this.getPies(this.state.offset, order, this.state.searchString)
    }
  }

  

  render(){
      return (
        <div>
          <Grid container spacing={24} style={{padding:24}}>
            {this.state.pies ? (
                <div>
                    <SearchBar
                      onSearchChange={this.onSearchChange}
                      changeOrder={this.changeOrder}
                      order={this.state.order}
                    />            
                    <Grid container spacing={24} style={{padding: 24}}>
                        <List>
                            {this.state.pies.map((currentPie,index) => {  
                                let store = this.state.stores.find(pie => pie.id === currentPie.storeId);                      
                                return(
                                <ListItem key={index}>                                 
                                    <Pie pie = {currentPie} 
                                         store = {store}
                                    />
                                </ListItem>
                                );
                            })}
                        </List>
                    </Grid>
                    <Pager
                      nextPage={this.nextPage}
                      prevPage={this.prevPage}
                      pageOffset={this.state.offset}
                      currentPageLength={this.state.pies.length}
                    />
                    
                </div>
            ) : "No pies Found"}
            </Grid>
        </div>
      )
    };

}

export default PieList;