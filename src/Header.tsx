import * as React from "react";
import { RouteComponentProps, withRouter } from "react-router-dom";
import "url-search-params-polyfill";
import logo from "./logo.png";
import {Navbar, Nav , NavDropdown} from "react-bootstrap"


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
      
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse>
    <Nav className="mr-auto">
      <Nav.Link href="#features">Features</Nav.Link>
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      
    </Nav>
    <Nav>
      <Nav.Link href="#deets">More deets</Nav.Link>
      <Nav.Link eventKey={2} href="#memes">
        Dank memes
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
</Navbar>;
    </header>
  );
};

export default withRouter(Header);
