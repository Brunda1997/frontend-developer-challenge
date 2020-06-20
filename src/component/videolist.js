import React from 'react';

import {Grid} from '@material-ui/core'
import Videoitem from './videoitem';


const videolist=({videos,onvideoselect})=>{
  const listvideo=videos.map((video,id)=>
  
    <Videoitem
    onvideoselect={onvideoselect}
    key={id}
    videos={video}/>

  )
  return(
    <Grid container spacing={10}>
{listvideo}
    </Grid>
     
  )
}

export default videolist;