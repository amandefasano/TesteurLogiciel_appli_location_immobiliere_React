import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Root() {

  return (
    <>
      <Header />

      <div id="body">
        <Outlet />
      </div>

      <Footer />
    </>
  );
}

export default Root;
