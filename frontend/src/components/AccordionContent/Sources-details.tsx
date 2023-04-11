import { Grid, Typography } from '@mui/material'

export const Sources = ({ number, text1, text2 }: any) => {
  return (
    <Grid container>
      <Grid
        item
        borderRadius="50%"
        bgcolor="#DFF0D8"
        sx={{ width: '50px', height: '50px' }}
        textAlign="center"
        alignItems="center"
        display="flex"
        flexDirection="column"
        justifyContent="center"
      >
        <Typography
          variant="h6"
          fontFamily="Clash Grotesk"
          fontWeight="500"
          fontSize="24px"
          lineHeight="26px"
        >
          {number}
        </Typography>
      </Grid>
      <Grid item sx={{ ml: '32px', width: '500px' }}>
        <Typography
          paragraph
          fontFamily="Public Sans"
          fontWeight="400"
          fontSize="14px"
          lineHeight="20px"
          display="inline"
          color="#000000"
        >
          {text1}
        </Typography>
        <Typography
          display="inline"
          fontFamily="Public Sans"
          fontWeight="700"
          fontSize="16px"
          lineHeight="24px"
          color="#00653E"
          sx={{ ml: '10px', textDecoration: 'underline' }}
        >
          {text2}
        </Typography>
      </Grid>
    </Grid>
  )
}
