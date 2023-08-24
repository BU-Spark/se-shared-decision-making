import { Grid, Container, Typography, IconButton } from "@mui/material";
import Logo from "./logoNav.png";
import MenuButton from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Select from "../Select/Select";
import './Header.css'
import { Fragment, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [headerState, setHeaderState] = useState(false);
  const showHeader = () => {
    setHeaderState(!headerState)
  }
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
    <Container sx={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'space-between', boxShadow:'1', padding:'2', backgroundColor:"#fff", minHeight:'10vh'}} maxWidth={false} className="header">
        <Grid container sx={{maxWidth:'5vw'}} className="hamburger" style={{display:'flex', justifyContent:'flex-start', alignItems:'flex-start'}}>
          <IconButton 
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={showHeader}
            sx={{ mr: 2, display: { xs: 'block', sm: 'none',}, }}>   
            <MenuIcon />
          </IconButton>
        </Grid>
        <Grid container sx={{flexDirection:'row', justifyContent:'space-between', alignItems:'center', minHeight:'2vh', flexWrap:'nowrap', display: { xs: headerState?'flex':'none', sm: 'flex',}}} className="responsive">
          <Grid container sx={{display:'flex', justifyContent:'center'}} className="nav-logo">
            <img className="nav" src="https://se-shared-decision-making-production.up.railway.app/uploads/Linear_Folate_f87df22743.png" alt="Logo" />
          </Grid>
          <Grid container sx={{display:'flex', flexDirection:'row', justifyContent:'space-between', alignItems:'center'}} className="nav-list">
            <MenuButton className="nav-button" routeName={"Home"} onClick={() => navigate("/Home")} data-testid="header-home">
              Home
            </MenuButton>
            <MenuButton
            className="nav-button"
              routeName={"MyChoices"}
              onClick={() => navigate("/MyChoices")}
              data-testid="header-choices"
            >
              My Choices
            </MenuButton>
            <MenuButton
            className="nav-button"
              routeName={"MyValues"}
              onClick={() => navigate("/MyValues")}
              data-testid="header-values"
            >
              My Values
            </MenuButton>
            <MenuButton
            className="nav-button"
              routeName={"MyStuff"}
              onClick={() => navigate("/MyStuff")}
              data-testid="header-stuff"
            >
              MyStuff
            </MenuButton>
          </Grid>
          <Grid container className="language-selector" sx={{display:'flex', justifyContent:'flex-end'}}>
            <Select />
          </Grid>
        </Grid>
    </Container>
    </Fragment>
  );
};

export default Header;

// export default Header
