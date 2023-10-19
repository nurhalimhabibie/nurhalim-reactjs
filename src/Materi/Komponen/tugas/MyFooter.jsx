import { Container, Navbar } from "react-bootstrap";

const MyFooter = () => {
  return (
    <div>
      <Navbar expand="lg" bg="dark" data-bs-theme="dark" fixed="bottom">
        <Container>
          <Navbar.Text className="mx-auto gap-3">© Eduwork</Navbar.Text>
        </Container>
      </Navbar>
    </div>
  );
};

export default MyFooter;
