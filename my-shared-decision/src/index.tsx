import React from 'react';
import {
Nav,
NavLink,
Bars,
NavMenu,
NavBtn,
NavBtnLink,
} from './NavbarElements';
import Logo from './LogoRender';

const Navbar = () => {
return (
	<>
	<Nav>
		<Bars />
		<Logo/>
		<NavMenu>
		<NavLink to='/Home'>
			Home
		</NavLink>
		<NavLink to='/MyChoices'>
			My Choices
		</NavLink>
		<NavLink to='/MyValues'>
			My Values
		</NavLink>
		<NavLink to='/MyStuff'>
			My Stuff
		</NavLink>
		<NavLink to='/Welcome'>
			Welcome
		</NavLink>
		{/* Second Nav */}
		</NavMenu>
		{/* <NavBtn>
		<NavBtnLink to='/signin'>Sign In</NavBtnLink>
		</NavBtn> */}
	</Nav>
	</>
);
};

export default Navbar;

