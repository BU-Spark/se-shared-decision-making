import { Grid, Container, Typography } from "@mui/material";
import Logo from "./logoNav.png";
import MenuButton from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Select from "../Select/Select";
import './Header.css'
import {  } from "@mui/material";
import { Fragment } from "react";

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
    <Fragment>
    <Container sx={{display:'flex', justifyContent:'space-between', alignItems:'center', boxShadow:'1', padding:'2', backgroundColor:"#fff", minHeight:'10vh'}} maxWidth={false} className="header responsive">
        <Container className="nav-logo" maxWidth={false}>
          <img className="nav" src={Logo} alt="Logo" />
        </Container>
        <Container sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} className="nav-list">
          <MenuButton className="nav-button" routeName={"Home"} onClick={() => navigate("/Home")}>
            Home
          </MenuButton>
          <MenuButton
          className="nav-button"
            routeName={"MyChoices"}
            onClick={() => navigate("/MyChoices")}
          >
            My Choices
          </MenuButton>
          <MenuButton
          className="nav-button"
            routeName={"MyValues"}
            onClick={() => navigate("/MyValues")}
          >
            My Values
          </MenuButton>
          <MenuButton
          className="nav-button"
            routeName={"MyStuff"}
            onClick={() => navigate("/MyStuff")}
          >
            MyStuff
          </MenuButton>
        </Container>
        <Container className="language-selector" sx={{display:'flex', justifyContent:'flex-end'}} maxWidth={false}>
          <Select />
        </Container>
    </Container>
    </Fragment>
  );
};

export default Header;

// export default Header
