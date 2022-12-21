import React from "react";
import { Button as MUIButton } from "@mui/material";
const MenuButton = ({ children, routeName, onClick }: any) => {
  const pathlength = window.location.pathname.split("/").length;
  const pathName = window.location.pathname.split("/")[pathlength - 1];
  const active = pathName === routeName;

  console.log(pathlength);

  //Button styling for navigation bar, applies hover properties when hover

  return (
    <MUIButton
      sx={{
        textTransform: "none",
        borderRadius: 8,
        paddingX: 3,
        paddingY: 1,
        border: "2px solid #0c3a25",
        color: active ? "white" : "#0c3a25",
        backgroundColor: active ? "#0c3a25" : "white",
        boxShadow: "none",
        ":hover": { color: "white" },
      }}
      variant="contained"
      onClick={onClick}
    >
      {children}
    </MUIButton>
  );
};

export default MenuButton;
