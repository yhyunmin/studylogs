// 태그명에 의존하지않고 스타일링 주기 (태그이름이 바꼈을때)
// styled component + animation
import styled, { keyframes } from "styled-components";
const Container = styled.div`
  display: flex;
`;
const oneRound = keyframes`
  from {
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);

  }
`;
const Emoji = styled.span`
  font-size: 36px;
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${oneRound} 1s ease-in-out forwards;
  //
  ${Emoji}:hover {
    //

    font-size: 98px;
  }
`;

function App() {
  return (
    <Container>
      <Box>
        <Emoji as="p">😊</Emoji>
      </Box>
    </Container>
  );
}

export default App;
