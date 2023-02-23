import CustomButton from './CustomButton';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars} from '@fortawesome/free-solid-svg-icons'

function NavBar() {
  return (
    <>
      <style type="text/css">
        {`
        
          .icon{
            color: #F2705B;
            font-size: 25px;
          }

          .icon:hover{
            color: #3E5B62;
          }

          .icon:active{
            color: #3E5B62;
          }

          .icon:focus{
            color: #3E5B62;
          }

          .toggle,
          .toggle:focus,
          .toggle:active{
            outline: none;
            border: none;
            box-shadow: none;
          }

          .nav-item{
            color: #3E5B62  
          }
         
          .nav-item:hover{
            color: #F2705B;
          }

          .nav-item:active{
            color: #3E5B62  
          }

          .nav-item:focus{
            color: #F2705B;
          }

        `}
      </style>


      <Navbar collapseOnSelect fixed="top" bg='white' expand="lg" className="align-items-center" >
        <Container>
          <Navbar.Brand href="#home" className='mx-1'>Stock App</Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" className='mx-1 toggle'>
            <FontAwesomeIcon icon={faBars} className="icon"/>
          </Navbar.Toggle>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav 
              className="ms-auto align-items-lg-center align-items-end"             
            >
              <Nav.Link href="#home" className="mx-3 nav-item" ac>HOME</Nav.Link>
              <Nav.Link href="#whatwedo" className="mx-3 nav-item">WHAT WE DO</Nav.Link>
              <Nav.Link href="#howitworks" className="mx-3 nav-item">HOW IT WORKS</Nav.Link>
              <Nav.Link href="#pricing" className="mx-3 nav-item">PRICING</Nav.Link>
              <Nav.Link href="#signin" className="fs-6">
                  <CustomButton variant='custom' button="SIGN IN"/>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>    
  );
}

export default NavBar;