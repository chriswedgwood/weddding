import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";
import logo from "./logo.png";
import home from "./home.png";
import church from "./church3.png"
import party from "./party4.png"
import bed from "./bed.png"
import gift from "./gift.png"
import rsvp from "./rsvp.png"
import photo from "./photo.png"


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
          <LinkContainer to="/home">
              <NavItem><a href="/">
          <img src={home} style={{width:63, marginTop: -7}} />
          </a></NavItem>
            </LinkContainer>
            <LinkContainer to="/ceremony">
              <NavItem> <img src={church} style={{width:74, marginTop: -7}} /></NavItem>
            </LinkContainer>
            <LinkContainer to="/reception">
              <NavItem><img src={party} style={{width:60, marginTop: -7}} /></NavItem>
            </LinkContainer>
            <LinkContainer to="/accomodation">
              <NavItem><img src={bed} style={{width:100, marginTop: -7}} /></NavItem>
            </LinkContainer>
            <LinkContainer to="/registry">
              <NavItem><img src={gift} style={{width:70, marginTop: -7}} /></NavItem>
            </LinkContainer>
            <LinkContainer to="/rsvp">
              <NavItem><img src={rsvp} style={{width:80, marginTop: -7}} /></NavItem>
            </LinkContainer>
            <LinkContainer to="/photos">
              <NavItem><img src={photo} style={{width:80, marginTop: -7}} /></NavItem>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default withRouter(Header);
