import { Grid } from "@mui/material";
import Logo from "./logoNav.png";
import MenuButton from "../Button/Button";
import { useNavigate } from "react-router-dom";
import Select from "../Select/Select";

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
    <Grid
      //Grid design allows for a responsive page, consider updating other features with this format when doing responsiveness testing
      container
      columns={{ xl: 12, lg: 12, md: 12 }}
      item
      xl={12}
      lg={12}
      md={12}
      sx={{
        backgroundColor: "white",
        boxShadow: 1,
        padding: 2,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Grid item xl={2} lg={2} md={2}>
        <img className="nav" src={Logo} alt="Logo" />
      </Grid>
      <Grid
        container
        item
        xl={4}
        lg={4}
        md={4}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Grid item>
          <MenuButton routeName={"Home"} onClick={() => navigate("/Home")}>
            Home
          </MenuButton>
        </Grid>
        <Grid item>
          <MenuButton
            routeName={"MyChoices"}
            onClick={() => navigate("/MyChoices")}
          >
            My Choices
          </MenuButton>
        </Grid>
        <Grid item>
          <MenuButton
            routeName={"MyValues"}
            onClick={() => navigate("/MyValues")}
          >
            My Values
          </MenuButton>
        </Grid>
        <Grid item>
          <MenuButton
            routeName={"MyStuff"}
            onClick={() => navigate("/MyStuff")}
          >
            MyStuff
          </MenuButton>
        </Grid>
      </Grid>
      <Grid item xl={1} lg={1} md={1}>
        <Select />
      </Grid>
    </Grid>
  );
};

export default Header;

// export default Header
