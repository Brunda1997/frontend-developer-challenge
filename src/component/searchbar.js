import React from 'react';
import {Paper,TextField} from '@material-ui/core';
class searchbar extends React.Component{
   state={
       searchterm:''
   }
   handleChange=(event)=>{
        this.setState({searchterm:event.target.value})
   }

   handleSubmit=(event)=>{
    const {searchterm}=this.state;
    const {onformsubmit}=this.props;

    onformsubmit(searchterm);

    event.preventDefault();

    

    }
   
    render(){
        return(
            <Paper elevation={6} style={{padding:'25px'}}>
                <form onSubmit={this.handleSubmit}>
                    <TextField
                     fullWidth label="Search...." onChange={this.handleChange}></TextField>
                </form>
            </Paper>
        )
    }
}

export default searchbar;