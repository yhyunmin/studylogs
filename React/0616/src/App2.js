//props 로 styled 유동적으로 활용
import styled from "styled-components";

const Container = styled.div`
  display: flex;
`;

// const Box1 = styled.div`
//   background-color: teal;
//   width: 100px;
//   height: 100px;
// `;
// const Box2 = styled.div`
//   background-color: tomato;
//   width: 100px;
//   height: 100px;
// `;

const Box = styled.div`
  //background-color: ${(props) => props.bgc};
  background-color: ${({ bgc }) => bgc};
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;
function App2() {
  return (
    <Container>
      <Box bgc="teal">
        <Text>styled-component 연습</Text>
      </Box>
      <Box bgc="tomato"></Box>
    </Container>
    // <div>
    //   <div>
    //  <span></span>
    //   </div>
    //   <div></div>
    // </div>
  );
}

export default App2;
