import { Link, Location, useLocation } from "react-router-dom";
import {
  RiCoupon3Fill,
  RiDashboardFill,
  RiShoppingBag3Fill,
} from "react-icons/ri";
import { AiFillFileText } from "react-icons/ai";
import { IoIosPeople } from "react-icons/io";
import { IconType } from "react-icons";
import {
  FaChartBar,
  FaChartLine,
  FaChartPie,
  FaGamepad,
  FaStopwatch,
} from "react-icons/fa";
import { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const Sidebar = () => {
  const location = useLocation();

  const [showNav, setShowNav] = useState<boolean>(false);
  const [phoneActive, setPhoneActive] = useState<boolean>(
    window.innerWidth < 1100
  );

  return (
    <>
      {phoneActive && (
        <button id="hamburger" onClick={() => setShowNav(true)}>
          <RxHamburgerMenu />
        </button>
      )}
      <aside
        style={
          phoneActive
            ? {
                width: "20rem",
                height: "100vh",
                position: "fixed",
                top: 0,
                left: showNav ? "0" : "-20rem",
                transition: "all 0.5s",
              }
            : {
                transition: "all 0.5s",
              }
        }
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <h2>ShopZen.</h2>
          {phoneActive && (
            <button id="close-sidebar" onClick={() => setShowNav(false)}>
              X
            </button>
          )}
        </div>

        <DashboardLi location={location} />
        <ChartsLi location={location} />
        <AppsLi location={location} />
      </aside>
    </>
  );
};

const DashboardLi = ({ location }: { location: Location }) => (
  <div>
    <h5>Dashboard</h5>
    <ul>
      <NavItemsLi
        url="/admin/dashboard"
        location={location}
        Icon={RiDashboardFill}
        title="Dashboard"
      />
      <NavItemsLi
        url="/admin/products"
        location={location}
        Icon={RiShoppingBag3Fill}
        title="Product"
      />
      <NavItemsLi
        url="/admin/customer"
        location={location}
        Icon={IoIosPeople}
        title="Customer"
      />
      <NavItemsLi
        url="/admin/transaction"
        location={location}
        Icon={AiFillFileText}
        title="Transaction"
      />
    </ul>
  </div>
);

const ChartsLi = ({ location }: { location: Location }) => (
  <div>
    <h5>Charts</h5>
    <ul>
      <NavItemsLi
        url="/admin/chart/bar"
        location={location}
        Icon={FaChartBar}
        title="Bar"
      />
      <NavItemsLi
        url="/admin/chart/pie"
        location={location}
        Icon={FaChartPie}
        title="Pie"
      />
      <NavItemsLi
        url="/admin/chart/line"
        location={location}
        Icon={FaChartLine}
        title="Line"
      />
    </ul>
  </div>
);

const AppsLi = ({ location }: { location: Location }) => (
  <div>
    <h5>Apps</h5>
    <ul>
      <NavItemsLi
        url="/admin/app/stopwatch"
        location={location}
        Icon={FaStopwatch}
        title="Stopwatch"
      />
      <NavItemsLi
        url="/admin/app/coupon"
        location={location}
        Icon={RiCoupon3Fill}
        title="Coupon"
      />
      <NavItemsLi
        url="/admin/app/toss"
        location={location}
        Icon={FaGamepad}
        title="Toss"
      />
    </ul>
  </div>
);

interface NavItemsLiProps {
  url: string;
  title: string;
  location: Location;
  Icon: IconType;
}

const NavItemsLi = ({ url, title, location, Icon }: NavItemsLiProps) => (
  <li
    style={{
      backgroundColor: location.pathname.includes(url)
        ? "rgba(81, 0, 255, 0.1)"
        : "white",
    }}
  >
    <Link
      to={url}
      style={{
        color: location.pathname.includes(url) ? "rgb(106, 0, 255)" : "balck",
      }}
    >
      {<Icon />}
      {title}
    </Link>
  </li>
);

export default Sidebar;
