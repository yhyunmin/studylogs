// styled component + animation
import styled, { keyframes } from "styled-components";
import { useEffect, useState } from "react";

const Container = styled.div`
  display: flex;
`;
const rotateAnimation = keyframes`
//from {
//  transform:rotate(0deg);
//}
//  to{
//    transform:rotate(360deg);
//  }
  0%{
    transform: rotate(0deg);
    border-radius: 0;
  }
  100%{
    transform: rotate(360deg);
    border-radius: 100px;
  }
`;
const smaller = keyframes`
  from {
    transform: rotate(0deg);

  }
  to {
    transform: rotate(360deg);

  }
`;
const Box = styled.div`
  height: 200px;
  width: 200px;
  background-color: tomato;
  display: flex;
  align-items: center;
  justify-content: center;

  span {
    font-size: 36px;
    &:hover {
      font-size: 4rem;
    }
    &.start {
      animation: ${smaller} 1s ease-in-out forwards;
    }
  }
`;

function App() {
  const [start, setStart] = useState("");
  useEffect(() => {
    setStart("start");
  }, []);
  return (
    <Container>
      <Box>
        <span className={start}>😊</span>
      </Box>
    </Container>
  );
}

export default App;
