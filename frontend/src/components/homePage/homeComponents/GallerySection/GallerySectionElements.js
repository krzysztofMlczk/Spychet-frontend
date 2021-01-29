import styled from "styled-components";
import { AiOutlineArrowUp } from "react-icons/ai";

export const Slider = styled.div`
  position: relative;
  // height: ${(props) => (props.width * 9) / 11}px;
  height: 100vh;
  width: ${(props) => props.width};
  max-width: 100%;
  max-height: 1080px;
  margin: 0 auto;
  background: #232627;
  overflow: hidden;
`;

export const SliderContent = styled.div`
  transform: translateX(-${(props) => props.translate}px);
  transition: transform ease-out ${(props) => props.transition}s;
  height: 90%;
  width: ${(props) => props.width}px;
  display: flex;
`;

export const Slide = styled.div`
  height: 100%;
  width: ${(props) => props.width}px;
  background-image: url(${(props) => props.source});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

export const Arrow = styled(AiOutlineArrowUp)`
  opacity: 0.5;
  ${({ left }) => (left ? "rotate: -90deg" : "rotate: 90deg")};
  ${({ left }) => (left ? "left: 25px" : "right: 25px")};
  height: 30px;
  width: 30px;
  color: #fff;
  transition: all ease-in 0.1s;
`;

export const ArrowWrap = styled.div`
  position: absolute;
  top: 0;
  ${({ left }) => (left ? "left: 0" : "right: 0")};
  height: 90%;
  width: 8%;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all ease-in 0.15s;
  z-index: 1;

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.15);
  }

  &:hover ${Arrow} {
    transform: scale(1.1) translateX(${({ left }) => (left ? "-2px" : "2px")});
    opacity: 1;
  }
`;

export const Additionals = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 1.5vw;
  z-index: 2;
`;

export const Dot = styled.span`
  // each dot is an empty span, so we will specify dot size by padding!
  padding: 4px;
  margin-right: 5px;
  border-radius: 50%;
  background: white;
  opacity: ${({ active }) => (active ? "1" : "0.5")};
`;

export const DotWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const CheckboxWrapper = styled.div`
  opacity: 0.5;
  padding-left: 50px;
  color: white;
`;

export const CompanyName = styled.p`
  opacity: 0.5;
  color: white;
  padding-right: 50px;
`;
