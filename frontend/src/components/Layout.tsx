import NavBar from "./Navbar/NavBar";
import FooterBar from "./Footer/FooterBar";

const Layout = (props: any) => {
  return (
    <div>
      <NavBar />
      {props.children}
      <FooterBar />
    </div>
  );
};
export default Layout;

//Layout fixed and pushed to branch
