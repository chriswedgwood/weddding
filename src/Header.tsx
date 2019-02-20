import * as React from "react";
import { NavLink, RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";
import logo from "./love.jpg";


const Header: React.FC<RouteComponentProps> = props => {
  const [search, setSearch] = React.useState("");
  React.useEffect(() => {
    const searchParams = new URLSearchParams(props.location.search);
    setSearch(searchParams.get("search") || "");
  }, []);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.currentTarget.value);
  };

  const handleSearchKeydown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      props.history.push(`/products?search=${search}`);
    }
  };

  return (
    <header className="header">
      
      <img src={logo} className="header-logo" alt="logo" />
      <h1 className="header-title">Emma and Chris's Wedding</h1>
      <nav>
        <NavLink
          to="/home"
          className="header-link"
          activeClassName="header-link-active"
        >
          Home
        </NavLink>
        <NavLink
          to="/ceremony"
          className="header-link"
          activeClassName="header-link-active"
        >
          Ceremony
        </NavLink>
        <NavLink
          to="/reception"
          className="header-link"
          activeClassName="header-link-active"
        >
          Reception
        </NavLink>
        <NavLink
          to="/timetable"
          className="header-link"
          activeClassName="header-link-active"
        >
          Timetable
        </NavLink>
      </nav>
    </header>
  );
};

export default withRouter(Header);
