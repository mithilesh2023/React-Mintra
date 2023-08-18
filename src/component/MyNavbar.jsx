import { Form, Col, Button, Row, Navbar, Container } from 'react-bootstrap';
import Badge from '@mui/material/Badge';
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

const StyledBadge = styled(Badge)(({ theme }) => ({
  '& .MuiBadge-badge': {
    right: -3,
    top: 13,
    border: `2px solid ${theme.palette.background.paper}`,
    padding: '0 4px',
  },
}));

const MyNavbar = () => {
  return (
    <Navbar className="bg-success mb-3" data-bs-theme="dark">
      <Container>
        <Navbar.Brand href="#home">
          <img src="https://gumlet.assettype.com/Prabhatkhabar/2021-01/c0bdb0a8-5a8f-4aa2-8f12-1c1ba42388a7/myntra_old_logo.jpg?auto=format%2Ccompress" style={{width:'50px',borderRadius:'10px'}} alt="" />
        </Navbar.Brand>

        <Form inline>
          <Row>
            <Col xs="auto">
              <Form.Control
                type="text"
                placeholder="Search"
                className=" mr-sm-2"
              />
            </Col>
            <Col xs="auto">
              <Button type="submit">Submit</Button>
            </Col>
          </Row>
        </Form>
        <IconButton aria-label="cart">
      <StyledBadge badgeContent={4} color="secondary">
        <ShoppingCartIcon />
      </StyledBadge>
    </IconButton>
      </Container>
     
    </Navbar>
  );
}

export default MyNavbar;