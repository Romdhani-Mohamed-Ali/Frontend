import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function Menu() {
  return (
    <Navbar expand='lg' className='bg-primary'>
      <Container fluid>
        <Navbar.Brand href='' className='text-white'>
          Ecommerce Produits
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='navbarScroll' />
        <Navbar.Collapse id='navbarScroll'>
          <Nav
            className='me-auto my-2 my-lg-0'
            style={{ maxHeight: "100px" }}
            navbarScroll
          >
            <Nav.Link as={Link} to='/' className='text-white'>
              Articles Client
            </Nav.Link>
            <Nav.Link as={Link} to='/articles' className='text-white'>
              Articles
            </Nav.Link>
            <Nav.Link as={Link} to='/categories' className='text-white'>
              Categorie
            </Nav.Link>
            <Nav.Link as={Link} to='/scategories' className='text-white'>
              SCategorie
            </Nav.Link>

            {/* <NavDropdown title='Link' id='navbarScrollingDropdown'>
              <NavDropdown.Item href='#action3' className='text-white'>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href='#action4' className='text-white'>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action5' className='text-white'>
                Something else here
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
          <Form className='d-flex'>
            <Form.Control
              type='search'
              placeholder='Search'
              className='me-2'
              aria-label='Search'
            />
            <Button variant='outline-success'>Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Menu;
