import { Navbar, Nav } from 'react-bootstrap';
import Home from '../containers/Home';
import UserQuery from './UserQuery';
import EnquiryForm from './EnqueryForm';
import NotFound from './NotFound';
import { Switch,  Route } from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar bg="warning"  expand="lg">
          <Navbar.Brand className="text-white ">Our Courses</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <div className='justify-content-center'>
              <Nav className=" justify-content-center" as="ul" >
                <Nav.Item as="li">
                  <Nav.Link href="/">Courses</Nav.Link>

                </Nav.Item>
                <Nav.Item as="li">
                  <Nav.Link href="/enquiries">Enquiries</Nav.Link>

                </Nav.Item>
                
              </Nav>
            </div>
          </Navbar.Collapse>
        </Navbar>
          <Switch><Route exact path="/" component={Home} />
            <Route path="/enquiries" component={UserQuery} />
            <Route path="/courses/:id/:name" component={EnquiryForm} />
            <Route component={NotFound} />
          </Switch>
    </>
  );
}

export default App;
