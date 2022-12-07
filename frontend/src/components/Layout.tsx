import NavBar from "./Navbar/NavBar";
import FooterBar from "./Footer/FooterBar";

const Layout = (props: any) => {
  return (
    <div style={{ backgroundColor: "#0c3a25", margin: "0", width: "100%" }}>
      <NavBar />
      {props.children}
      <FooterBar />
    </div>
  );
};
export default Layout;

//Layout fixed and pushed to branch
