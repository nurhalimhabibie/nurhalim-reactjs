import { Container } from "react-bootstrap";

const FunctionalComponent = ({ nama }) => {
  return (
    <div>
      <Container className="mt-5 ps-5">
        <h1>Membuat Functional Komponen</h1>
        <h2>Hallo {nama}, selamat belajar</h2>
      </Container>
    </div>
  );
};

FunctionalComponent.defaultProps = {
  nama: "User",
};
export default FunctionalComponent;
