import "./MainLayout.css";
import { Outlet } from "react-router-dom";
import { useGetProfileQuery } from "../redux/api";
import SideHeader from "../components/SideHeader/SideHeader";
import Header from "../components/Header/Header";

const MainLayout = () => {
  const { data } = useGetProfileQuery();

  return (
    <div className="gx-0 mainArea">
      <div className="sideNav">
        <SideHeader />
      </div>
      <div className="mainNav">
        <div>
          <Header />
          <Outlet />
        </div>
        <footer className="footer">
          <p>
            &copy; {new Date().getFullYear()}. All rights reserved by{" "}
            {data?.data?.[0].name ? data?.data?.[0].name : `Abubakar Siddik`}
          </p>
        </footer>
      </div>
    </div>
  );
};

export default MainLayout;
