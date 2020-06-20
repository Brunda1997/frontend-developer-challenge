import React from 'react';

import {Grid,Paper,Typography} from '@material-ui/core'

const videoitem=({videos,key,onvideoselect})=>{
  return(
   <Grid item xs={12}>
     <Paper style={{display:'flex',width:'150%',marginLeft:'100px', alignItems:'center', cursor:'pointer'}} onClick={()=>onvideoselect(videos)}>
       <img style={{marginLeft:'50px'}} alt="thumbnail"src={videos.snippet.thumbnails.medium.url}/>   
        <Typography variant="subtitle"><b>{videos.snippet.title}</b></Typography>
       
     </Paper>
   </Grid>
  );
}

export default videoitem;