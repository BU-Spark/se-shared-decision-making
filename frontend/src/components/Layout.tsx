import { Grid } from "@mui/material";
import FooterBar from "./Footer/FooterBar";
import Header from "./Navbar/Header";

const Layout = ({ children }: any) => {
  return (
    <Grid sx={{ width: "100%", minHeight:'100vh' }}>
      {/* Please keep this layout, must also be made responsive, used for standardization between pages (like page sizing, etc.), the children attribute is where you would put page content in place of:  <Layout>Hello WOrld!</Layout> */}
      {/* //Grid configure good for most 3 column pages on the website */}
      {/* // <Grid container columns={{ xl: 12, lg: 12, md: 12 }}> */}
      <Header />
      {children}
      <FooterBar />
      {/* // </Grid> */}
    </Grid>
  );
};
export default Layout;

//Layout fixed and pushed to branch
