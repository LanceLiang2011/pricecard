import { styled } from "styled-components";
import Header from "./components/Header";
import Pricecard from "./components/Pricecard";

function App() {
  return (
    <Wrapper>
      <Header />
      <Pricecard />
    </Wrapper>
  );
}

export default App;

const Wrapper = styled.div``;
