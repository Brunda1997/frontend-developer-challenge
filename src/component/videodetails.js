import React from 'react';
import {Paper,Typography} from '@material-ui/core';

const videodetails=({video})=>{
   if(!video) return <div>Loading..</div>
   
   const videosrc=`https://www.youtube.com/embed/${video.id.videoId}`
   
    return(

       <React.Fragment>
       <Paper elevantion={6} style={{height:'50%',marginLeft:'10px',width:'115%'}}>
            <iframe frameBorder="0" height="100%" width="120%" title="video player" src={videosrc}/>
       </Paper>
       <Paper elevation={6} style={{padding:'15px',marginTop:'20px',width:'135%'}}>
       
       <Typography variant="h4">{video.snippet.title}-{video.snippet.channaelTitle}</Typography>
       <Typography variant="subtitle1">{video.snippet.channaelTitle}</Typography>
       <Typography variant="subtitle2">{video.snippet.description}</Typography>
       </Paper>
       </React.Fragment>
    )
}
export default videodetails;