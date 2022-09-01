import { Container, Nav, Navbar } from "react-bootstrap";
import { NavLink } from "react-router-dom";
const Footer = () => {
  return (
    <div className="footer">
      <Navbar expand="lg" fixed="bottom">
        <Container>
          <Navbar.Collapse className="justify-content-middle">
            <Nav className="ml-auto">
              <NavLink to="/coinFlip" className="nav-link">
                Today
              </NavLink>
              <NavLink to="/UserProfile" className="nav-link">
                About Me
              </NavLink>
              <NavLink to="/inspiration" className="nav-link">
                Inspiration
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};
export default Footer;