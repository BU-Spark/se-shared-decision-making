import { Box, Menu, MenuItem, styled, Typography} from '@mui/material';

import Button from '@mui/material/Button';
import React from 'react';
import { Link } from 'react-router-dom';

const Header = () =>{
    const TopButton = styled(Button)({
        borderRadius:"12px"
    });
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
      };
      const handleClose = () => {
        setAnchorEl(null);
      };
    return(
        <div style={{
            display: 'flex',
            alignItems: 'center'
        }}>
  
            <Box sx={{ flexGrow: 1,display: "flex", justifyContent: "flex-start" }}>
                <Typography>Partner To Decide</Typography>
            </Box>
            <Box sx={{ flexGrow: 3,display: "flex", justifyContent: "center" }}>
                <TopButton variant="outlined">
                    <Link to="/Home" style={{ textDecoration: 'none' }}>
                        Home
                    </Link>
                </TopButton>
                <TopButton variant="outlined">  
                    <Link to="/MyChoices" style={{ textDecoration: 'none' }}>
                        My Choices
                    </Link>
                   </TopButton>
                <TopButton variant="outlined">  
                    <Link to="/MyValues" style={{ textDecoration: 'none' }}>
                         My Values    
                    </Link>
                    </TopButton>
                <TopButton variant="outlined" >  
                    <Link to="/MyStuff" style={{ textDecoration: 'none' }}>
                        My Stuff
                    </Link>
                    </TopButton>

                
            </Box>

            <Box sx={{ flexGrow: 1,display: "flex", justifyContent: "flex-end" }}>  
                <TopButton variant="outlined"
                    id="demo-positioned-button"
                    aria-controls={open ? 'demo-positioned-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    onClick={handleClick}
                >
                    Language
                </TopButton>
                <Menu
                    
                    id="demo-positioned-menu"
                    aria-labelledby="demo-positioned-button"
                    anchorEl={anchorEl}
                    open={open}
                    onClose={handleClose}
                    anchorOrigin={{
                    vertical: 'top',
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

