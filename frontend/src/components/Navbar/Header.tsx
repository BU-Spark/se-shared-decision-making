import { Box, Menu, MenuItem, styled } from '@mui/material';
import Logo from "./logoNav.png";
import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

const Header = () => {

const [homeflag, sethomeFlag] = React.useState(false);
const [choiceflag, setchoiceFlag] = React.useState(false);
const [valueflag, setvalueFlag] = React.useState(false);
const [stuffflag, setstuffFlag] = React.useState(false);

const LinkStyle = {
  textDecoration: 'none',
  color: "inherit"
}

const ThemeColor = "#0c3a25";
const homeFlag = () => {
  sethomeFlag(true);
  setchoiceFlag(false);
  setvalueFlag(false);
  setstuffFlag(false);
};
const choiceFlag = () => {
  sethomeFlag(false);
  setchoiceFlag(true);
  setvalueFlag(false);
  setstuffFlag(false);
};
const valueFlag = () => {
  sethomeFlag(false);
  setchoiceFlag(false);
  setvalueFlag(true);
  setstuffFlag(false);
};
const stuffFlag = () => {
  sethomeFlag(false);
  setchoiceFlag(false);
  setvalueFlag(false);
  setstuffFlag(true);
};

const TopButton = styled(Button)({
  borderRadius: "50px",
  color: ThemeColor,
  borderWidth: "1px",
  borderColor: ThemeColor,
  margin: ".25rem"
});
const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
const open = Boolean(anchorEl);
const handleClick = (event: React.MouseEvent<HTMLElement>) => {
  setAnchorEl(event.currentTarget);
};
const handleClose = () => {
  setAnchorEl(null);
};
return (
  <div style={{
    display: 'flex',
    alignItems: 'center',
    backgroundColor: "white",
    padding: "1rem"
  }}>

    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-start" }}>
      <img className="nav" src={Logo} alt="Logo" />
    </Box>
    <Box sx={{ flexGrow: 3, display: "flex", justifyContent: "center" }}>

      <TopButton variant={homeflag ? "contained" : "outlined"}
        onClick={homeFlag}
      >
        <Link to="/Home" style={LinkStyle}>
          Home
        </Link>
      </TopButton>
      <TopButton variant={choiceflag ? "contained" : "outlined"}
        onClick={choiceFlag}
      >
        <Link to="/MyChoices" style={LinkStyle}>
          My Choices
        </Link>
      </TopButton>
      <TopButton variant={valueflag ? "contained" : "outlined"}
        onClick={valueFlag}
      >
        <Link to="/MyValues" style={LinkStyle}>
          My Values
        </Link>
      </TopButton>
      <TopButton variant={stuffflag ? "contained" : "outlined"}
        onClick={stuffFlag}
        color={stuffflag ? 'primary' : "secondary"}
      >
        <Link to="/MyStuff" style={LinkStyle}>
          My Stuff
        </Link>
      </TopButton>


    </Box>

    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "flex-end" }}>
      <Button variant="outlined"
        id="demo-positioned-button"
        aria-controls={open ? 'demo-positioned-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
        color='primary'
        endIcon={<KeyboardArrowDownIcon />}
        style={{ borderRadius: 50 }}
      >
        Language
      </Button>
      <Menu

        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
      >
        <MenuItem onClick={handleClose}>English</MenuItem>
        <MenuItem onClick={handleClose}>Spanish</MenuItem>
        <MenuItem onClick={handleClose}>Another</MenuItem>
      </Menu>

    </Box>
  </div>);
}

export default Header

