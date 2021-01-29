import styled from "styled-components";
import { BiLeftArrow } from "react-icons/bi";

export const SectionWrap = styled.div`
  width: 100%;
  border-bottom: ${({ lastChild }) =>
    lastChild ? "none" : "1px solid rgba(255, 255, 255, 0.4)"};
  margin-bottom: ${({ lastChild }) => (lastChild ? "none" : "20px")};
`;

export const RowWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Img = styled.img`
  width: 100px;
  height: 100px;
`;

export const LeftSide = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const TextWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 20px;
`;

export const Name = styled.div`
  /* color: #80d293; */
  color: #40bad5;
  font-size: 20px;
  line-height: 16px;
  font-weight: 900;
  letter-spacing: 2px;
  text-transform: uppercase;
  margin-bottom: 16px;
`;

export const Description = styled.div`
  max-width: 200px;
  letter-spacing: 1.3px;
  font-weight: 400;
  font-size: 15px;
  line-height: 24px;
  color: #fff;
`;

export const ToggleBtn = styled(BiLeftArrow)`
  color: white;
  font-size: 20px;
  margin-left: 50px;
  cursor: pointer;
  transform: ${({ rotate }) => (rotate ? "rotate(-90deg)" : "none")};
  transition: all 0.6s;

  &:hover {
    filter: drop-shadow(0 0 8px white);
    scale: 1.2;
  }
`;
