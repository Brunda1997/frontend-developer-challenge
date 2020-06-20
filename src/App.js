import React from 'react';

import {Grid} from '@material-ui/core';
 import youtube from './component/api/youtube';
import {Searchbar,Videolist,Videodetails} from './component';


class App extends React.Component{
    state={
        videos:[],
        selectvideo:null,
        ids:''
    }
   

componentDidMount(){
    this.handlesubmit('colors ');
}
onvideoselect=(video)=>{
    this.setState({selectvideo:video});
}

    handlesubmit=async (searchterm)=>{
        const response=await youtube.get('search',{
            params:{
                part:'snippet',
                maxResults:5,
                key:'AIzaSyCF-1-N2101y_ov7Eoq187gnMWrexOY8Gw',
                q:searchterm,
                
        }
        });
        this.setState({videos:response.data.items,selectvideo:response.data.items[0],ids:response.data.items});
    }
    
    render(){
        
        const {selectvideo,videos}=this.state;
        return(
            <Grid justify="center" container spacing={10}>
                <Grid item xs={12}>
                    <Grid container spacing={10}>
                        <Grid item xs={12}>
                            <Searchbar onformsubmit={this.handlesubmit}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Videodetails video={selectvideo}/>
                        </Grid>
                        <Grid item xs={4}>
                            <Videolist videos={videos}  onvideoselect={this.onvideoselect}/>
                        </Grid>

                    </Grid>
                </Grid>
            
            </Grid>
        )
    }
}

export default App; 