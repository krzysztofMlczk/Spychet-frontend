import styled from "styled-components";

export const BgWrapper = styled.section`
  position: fixed;
  background-color: #232627;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-self: center;
`;

export const BgImg = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  // img has to be bigger than the window, because it
  // is moved and if its the same size as the window it will be cut down
  // to window size and we will see it
  width: 112%;
  height: 112%;
  object-fit: cover;
`;
