import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Navbar expand="sm" fixed="bottom">
        <Container className="justify-content-center">
          <Nav>
            <NavLink to="/coinFlip" className="nav-link">
              Today
            </NavLink>
            <NavLink to="/userProfile" className="nav-link">
              Profile
            </NavLink>
            <NavLink to="/inspiration" className="nav-link">
              Inspiration
            </NavLink>
          </Nav>
        </Container>
      </Navbar>
    </div>
  );
};
export default Footer;
