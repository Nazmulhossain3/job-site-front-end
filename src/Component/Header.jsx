import { Container, Navbar } from "react-bootstrap";
import logo from '../assets/logo.png'

const Header = () => {
    return (
        <Navbar className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href="#home">
            <img className="w-50" src={logo} alt="" />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text className="text-info fw-bold  ">
          <span className="me-4">For Employers</span>
          <span className="me-4">Refer & Earn ₹15k</span>
          <span className="me-4">Login</span>
          <span className="me-4">Sign Up</span>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    );
};

export default Header;