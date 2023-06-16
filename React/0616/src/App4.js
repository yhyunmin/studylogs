//as 이용하여 html 태그 바꾸기
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
function App4() {
  return (
    <Container as="header">
      <Btn as="a" href="/">
        Log in
      </Btn>
    </Container>
  );
}

export default App4;
