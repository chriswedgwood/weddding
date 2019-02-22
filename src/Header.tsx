import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";
import logo from "./logo.png";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";

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

      <Navbar collapseOnSelect className="navbar" expand="lg">
        
        <Navbar.Toggle
          className="toggler"
          aria-controls="responsive-navbar-nav"
          
        />
        <Navbar.Collapse >
          <Nav>
          <Nav.Link to="/home">
            <NavItem><div className="navitem-text">Home</div></NavItem>
          </Nav.Link >
            <LinkContainer to="/ceremony">
              <NavItem><div className="navitem-text">Ceremony</div></NavItem>
            </LinkContainer>
            <LinkContainer to="/reception">
              <NavItem><div className="navitem-text">Reception</div></NavItem>
            </LinkContainer>
            <LinkContainer to="/accomodation">
              <NavItem><div className="navitem-text">Accomodation</div></NavItem>
            </LinkContainer>
            <LinkContainer to="/registry">
              <NavItem><div className="navitem-text">Registry</div></NavItem>
            </LinkContainer>
            <LinkContainer to="/rsvp">
              <NavItem><div className="navitem-text">Rsvp</div></NavItem>
            </LinkContainer>
            <LinkContainer to="/photos">
              <NavItem><div className="navitem-text">Photos</div></NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);
