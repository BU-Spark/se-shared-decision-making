import { Grid, Menu, MenuItem, styled } from '@mui/material';
import Logo from "./logoNav.png";
import Button from "../Button/Button";
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Select from '../Select/Select';

const Header = () => {

  const navigate = useNavigate();
// const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
// const open = Boolean(anchorEl);
// const handleClick = (event: React.MouseEvent<HTMLElement>) => {
//   setAnchorEl(event.currentTarget);
// };
// const handleClose = () => {
//   setAnchorEl(null);
// };
return (
  <Grid container columns={{ xl: 12, lg: 12, md: 12 }} item xl={12} lg={12} md={12}
  sx={{
    backgroundColor: "white", boxShadow: 1,
    padding: 2, display: "flex", justifyContent: "space-between", alignItems: "center"
  }} >

<Grid item xl={2} lg={2} md={2}>
        <img className="nav" src={Logo} alt="Logo" />
        </Grid>
      <Grid container item xl={4} lg={4} md={4} sx={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <Grid item>
          <Button routeName={"Home"} onClick={() => navigate("/Home")}>
            Home
            </Button>
        </Grid>
        <Grid item>
          <Button routeName={"MyChoices"} onClick={() => navigate("/MyChoices")}>
            My Choices
            </Button>
        </Grid>
        <Grid item>
          <Button routeName={"MyValues"} onClick={() => navigate("/MyValues")}>
            My Values
            </Button>
        </Grid>
        <Grid item>
          <Button routeName={"MyStuff"} onClick={() => navigate("/MyStuff")}>
            MyStuff
          </Button>
        </Grid>

        </Grid>
        <Grid item xl={1} lg={1} md={1}>
        <Select />

        </Grid>
    </Grid >);
  
}

export default Header

// export default Header
