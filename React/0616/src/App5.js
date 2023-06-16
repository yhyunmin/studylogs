//as 이용하여 html 태그 바꾸기
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Input = styled.input.attrs({ required: true, autoFocus: true })`
  background-color: tomato;
`;

function App5() {
  return (
    <Container as="header">
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
      <Input />
    </Container>
  );
}

export default App5;
