// Styled Components 활용
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;
const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Box2 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;
function App() {
  return (
    <Container>
      <Box1>
        <Text>styled-component 연습</Text>
      </Box1>
      <Box2></Box2>
    </Container>
    // <div>
    //   <div>
    //  <span></span>
    //   </div>
    //   <div></div>
    // </div>
  );
}

export default App;
