import styles from "../style";
import { Footer, Navbar } from "./components";
import { Outlet } from "react-router-dom";

const Layout = () => (
  <>
  <div className=" w-full overflow-hidden">
    <div className={`bg-black-gradient  ${styles.flexCenter}`}>
      <div className={`${styles.boxWidth} absolute`}>
        <Navbar />
      </div>
    </div>
    <div className={` ${styles.paddingX} `}>
      <div >
        <Outlet/>
        <Footer />
      </div>
    </div>
  </div>
  </>
);

export default Layout;