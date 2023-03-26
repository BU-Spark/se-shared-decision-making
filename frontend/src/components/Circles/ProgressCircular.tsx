import { CircularProgress } from '@mui/material';
import {Grid, Typography } from "@mui/material";

export const ProgressCircular=({size,leftValue,leftColor,rightValue,rightColor,content1,content2}:any)=>{
    const darkGreen = "#0c3a25";
    const lightGreen = '#dff0d8';

    return(
      <Grid container item justifyContent="center" alignItems="center" flexDirection="column" sx={{ display: 'flex' }}>
        <Grid item sx={{transform: 'scaleX(-1)' }}>
        <CircularProgress variant="determinate" value={leftValue} size={160} sx={{ color: leftColor}} />
        </Grid>
        <Grid item sx={{marginTop: '-165px'}}>
        <CircularProgress variant="determinate" value={rightValue} size={160} sx={{color: rightColor }} />
        </Grid>
        <Grid item sx={{mt:'-105px'}} >
        <Typography className="pain-percent-circlesContent" sx={{zIndex: 1 }}>{content1}</Typography>
        <Typography className="chance" sx={{ zIndex: 1 }}>{content2}</Typography>
        </Grid>
      </Grid>
            
           

    );
}
