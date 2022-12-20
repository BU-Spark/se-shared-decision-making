import { Grid } from "@mui/material";
import FooterBar from "./Footer/FooterBar";
import Header from "./Navbar/Header";

const Layout = ({ children }: any) => {
  return (
    <div style={{ width: "100%" }}>
      {/* // <Grid container columns={{ xl: 12, lg: 12, md: 12 }}> */}
      <Header />
      {children}
      <FooterBar />
      {/* // </Grid> */}
    </div>
  );
};
export default Layout;

//Layout fixed and pushed to branch
