import * as React from "react";
import Popover from "@mui/material/Popover";
import { Grid, Typography } from "@mui/material";

export const Popup = ({ title, text, open, anchorEl, handleClose }: any) => {
  const darkGreen = "#0c3a25";
  const lightGreen = "#dff0d8";
  return (
    <Popover
      open={open}
      anchorEl={anchorEl}
      onClose={handleClose}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "left",
      }}
    >
      <Grid container sx={{ width: "315px" }} borderRadius="12px">
        <Typography
          bgcolor={lightGreen}
          color={darkGreen}
          sx={{
            ml: "18px",
            mt: "21px",
            mixBlendMode: "multiply",
            opacity: "0,6",
            fontFamily: "Clash Grotesk",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: "24px",
            lineHeight: "108%",
            flex: "none",
            order: "0",
            flexGrow: "0",
          }}
        >
          {title}
        </Typography>
        <Typography
          color="#666666"
          sx={{
            ml: "24px",
            mt: "19px",
            mb: "24px",
            width: "257px",
            fontFamily: "Public Sans",
            fontWeight: "400",
            fontSize: "16px",
            lineHeight: "150%",
            fontStyle: "normal",
            flex: "none",
            order: "0",
            flexGrow: "0",
          }}
        >
          {text}
        </Typography>
      </Grid>
    </Popover>
  );
};
