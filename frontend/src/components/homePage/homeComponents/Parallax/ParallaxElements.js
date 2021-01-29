import styled from "styled-components";

export const ParallaxWrapper = styled.section`
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;

  &:before {
    content: "";
    position: absolute;
    bottom: 0px;
    width: 100%;
    height: 100px;
    background: linear-gradient(to top, #232627, transparent);
    z-index: 100;
  }

  @media screen and (max-width: 900px) {
    height: 80vh;
  }
  @media screen and (max-width: 600px) {
    height: 60vh;
  }
  @media screen and (max-width: 400px) {
    height: 50vh;
  }
`;

export const ParallaxBackground = styled.div`
  background: #232627;
  width: 100%;
  height: 100%;
`;

export const ParallaxMovingImg = styled.img`
  position: absolute;
  // starting distance from the top is passed as props
  top: ${(props) => `${props.topDistance}px`};
  // width is specified by props
  width: ${(props) => props.width};
`;

export const ParallaxStaticImg = styled.img`
  position: absolute;
  top: 80px;
  width: 100%;
`;
